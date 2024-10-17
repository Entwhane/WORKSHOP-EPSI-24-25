'use client'

import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase"; // Chemin vers ton fichier de configuration Firebase

import "./page.css";
import ThemeItem from "../../components/ThemeItem/ThemeItem";
import Grid from '@mui/material/Grid2';

export default function GamesPage() {

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchGames = async () => {
        try {
            const gamesCollection = collection(db, "Games");
            const gamesSnapshot = await getDocs(gamesCollection);

            const gamesList = await Promise.all(
                gamesSnapshot.docs.map(async (doc) => {
                    const gameData = { id: doc.id, ...doc.data() };

                    const questionsQuery = query(
                        collection(db, "Questions"),
                        where("game_id", "==", doc.ref)
                    );
                    const questionsSnapshot = await getDocs(questionsQuery);
                    const questionCount = questionsSnapshot.size;

                    return {
                        ...gameData,
                        questionCount
                    };
                })
            );

            setGames(gamesList);
            setLoading(false);
        } catch (error) {
            console.error("Erreur lors de la récupération des jeux et questions :", error);
        }
    };

    useEffect(() => {
        fetchGames();
    }, []);

    if (loading) {
        return (
            <div className="center" style={{ display: "flex", flexGrow: 1 }}>
                <p>Chargement des questionnaires...</p>
            </div>
        )
    }

    return (
        <div className={"body"}>
            <div className={"title"}>Choississez un thème sur lequel vous former</div>
            <Grid container size={9} justifyContent={"center"} alignItems={"center"} spacing={4} style={{ marginTop: 50 }}>
                {games.map((item, index) => {
                    if (item.questionCount || item.game_url) {
                        return (
                            <Grid key={index} size={{ xs: 11, sm: 10, md: 4 }}>
                                <ThemeItem item={item} />
                            </Grid>
                        )
                    }
                })}
            </Grid>
            <div className={"plus--btn"}>En savoir +</div>
        </div>
    );
};