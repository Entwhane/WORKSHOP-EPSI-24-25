'use client'

import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import WebView from "../../../../components/Webview/Webview";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../lib/firebase"; // Chemin vers ton fichier de configuration Firebase


export default function AdventurePage(props) {

    const { params } = props
    const { idTheme } = params
    const [game, setGame] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchGame = async () => {
        try {
            const gameRef = doc(db, "Games", idTheme);
            const gameSnapshot = await getDoc(gameRef);

            if (!gameSnapshot.exists()) {
                throw new Error("Game non trouvée");
            }

            const gameData = { id: gameSnapshot.id, ...gameSnapshot.data() };
            setGame(gameData)
            setLoading(false)
        } catch (error) {
            console.error("Erreur lors de la récupération du mode aventure :", error);
        }
    };

    useEffect(() => {
        fetchGame();
    }, []);

    if (loading) {
        return (
            <div className="center" style={{ display: "flex", flexGrow: 1 }}>
                <p>Chargement du mode aventure...</p>
            </div>
        )
    }

    return (
        <div className="col">
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                style={{ width: "100%", backgroundColor: '#00000011' }}
                spacing={0}
                id='contenu'
            >
                <div
                    style={{
                        padding: 20,
                        paddingInline: 50,
                        width: "100%",
                        maxWidth: 950,
                        backgroundColor: "white"
                    }}
                >
                    <Typography fontSize={32} style={{ marginBlock: 50 }} fontFamily={"ClashDisplay-Regular"}>
                        Module aventure
                        <Typography
                            component={"span"}
                            fontSize={32}
                            style={{
                                background: 'linear-gradient(161.06deg, #063F50 40.32%, #7FBFC2 70.2%, #FDFCDC 100.08%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: "900"
                            }}
                        >
                            {" "}cyber harcèlement
                        </Typography>
                    </Typography>
                    <WebView url={game.game_url} />
                </div>
            </Grid>
        </div>
    );
}