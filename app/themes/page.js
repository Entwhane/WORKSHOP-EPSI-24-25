'use client'

import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase"; // Chemin vers ton fichier de configuration Firebase

import "./page.css";
import ThemeItem from "../../components/ThemeItem/ThemeItem";


const blueGradient = ['0081A7', 'FDFCDC'];
const redGradient = ['F07167', 'FDFCDC'];

export default function GamesPage() {

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchGames = async () => {
        try {
            const gamesCollection = collection(db, "Games");
            const gamesSnapshot = await getDocs(gamesCollection);
            const gamesList = gamesSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setGames(gamesList);
            setLoading(false);
        } catch (error) {
            console.error("Erreur lors de la récupération des quizz :", error);
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
            <div className={"theme--wrapper"}>
                {games.map((item, index) => (
                    <ThemeItem key={index} item={item} />
                ))}
            </div>
            <div className={"plus--btn"}>En savoir +</div>
        </div>
    );
};