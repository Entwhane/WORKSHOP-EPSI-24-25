import About from "../../components/About/About";

export default function Home() {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <About />
        </div>
    );
}