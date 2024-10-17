import Image from "next/image";
import styles from "../page.css";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";

export default function Home() {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBar />
            <Contact />
            <Footer />
        </div>
    );
}