import Image from "next/image";
import styles from "../page.css";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import QuizzDetails from "../../components/QuizzDetails/QuizzDetail";

export default function Home() {
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
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        style={{ width: "100%", backgroundColor: '#00000011', height: "100%", flexGrow: 1 }}
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
          <Typography fontSize={32} style={{ marginBlock: 50}}>20 questions sur le <Typography component={"span"} fontSize={32} className="test">cyber harcèlement</Typography></Typography>
          <Grid container style={{ marginTop: 20, }}>
            {quizz.map((question) => (
              <Grid key={question.id} size={12} style={{ marginBlock: 20 }}>
                <QuizzDetails quizz={question} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Grid>
      <Footer />
    </div>
  );
}