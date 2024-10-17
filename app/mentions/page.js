import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import MentionsLegales from "../../components/MentionsLegales/MentionsLegales";

export default function Home() {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <MentionsLegales />
        </div>
    );
}