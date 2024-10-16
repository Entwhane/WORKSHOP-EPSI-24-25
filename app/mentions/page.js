import Image from "next/image";
import styles from "../page.css";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import QuizzDetails from "../../components/QuizzDetails/QuizzDetail";
import MentionsLegales from "../../components/MentionsLegales/MentionsLegales";

export default function Home() {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBar />
            <MentionsLegales />
            <Footer />
        </div>
    );
}