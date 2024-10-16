'use client'

import Image from "next/image";
import styles from "../page.css";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import QuizzDetails from "../../components/QuizzDetails/QuizzDetail";
import HomeButton from "../../components/HomeButton/HomeButton";
import Separator from "../../components/Separator/Separator";
import WebView from "../../components/Webview/Webview";

export default function AdventurePage() {

    const quizz = [
        {
            id: 1,
            title: "Combien de personnes sont touchées par le cyber harcèlement chaque année ?",
            answers: [
                {
                    id: 1,
                    title: "12000",
                    correct: true,
                },
                {
                    id: 2,
                    title: "25",
                    correct: false,
                },
                {
                    id: 3,
                    title: "1000502",
                    correct: false,
                },
            ]
        }
    ]

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
                    <WebView url={"http://ec2-35-180-205-74.eu-west-3.compute.amazonaws.com"} />
                </div>
            </Grid>
        </div>
    );
}