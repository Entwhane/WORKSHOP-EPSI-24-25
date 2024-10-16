import Image from "next/image";
import styles from "../page.css";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import QuizzDetails from "../../components/QuizzDetails/QuizzDetail";
import HomeButton from "../../components/HomeButton/HomeButton";
import Separator from "../../components/Separator/Separator";

export default function QuizzPage() {

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
            20 questions sur le
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
          <Grid container style={{ marginBlock: 50, }}>
            {quizz.map((question) => (
              <Grid key={question.id} size={12} style={{ marginBlock: 20 }}>
                <QuizzDetails quizz={question} />
              </Grid>
            ))}
          </Grid>
          <Separator color="#0081A7" />
          <div className="col center" style={{ marginBlock: 50 }}>
            <Grid container flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
              <Typography
                style={{
                  background: 'linear-gradient(161.06deg, #063F50 40.32%, #7FBFC2 70.2%, #FDFCDC 100.08%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: "500",
                  fontSize: 32
                }}
              >
                Bilan
              </Typography>
              <Typography
                style={{
                  fontWeight: "400",
                  fontSize: 20
                }}
              >
                Vous avez obtenu :
              </Typography>
            </Grid>
            <Grid container size={10} spacing={4} justifyContent={"center"} style={{ marginBlock: 50 }}>
              <Grid size={{ xs: 11, sm: 10, md: 6 }}>
                <HomeButton title="96%" subtitle="De bonnes réponses" color="#0081A7" />
              </Grid>
              <Grid size={{ xs: 11, sm: 10, md: 6 }}>
                <HomeButton title="57" subtitle="Minutes d’entrainement écoulées" color="#0081A7" />
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
    </div>
  );
}