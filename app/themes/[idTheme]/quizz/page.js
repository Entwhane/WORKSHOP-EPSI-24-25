'use client'

import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import QuizzDetails from "../../../../components/QuizzDetails/QuizzDetail";
import HomeButton from "../../../../components/HomeButton/HomeButton";
import Separator from "../../../../components/Separator/Separator";
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "../../../../lib/firebase"; // Chemin vers ton fichier de configuration Firebase

export default function QuizzPage(props) {
  const { params } = props
  const { idTheme } = params
  const [quizz, setQuizz] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchQuestionsWithResponses = async () => {
    try {
      const questionsRef = collection(db, "Questions");
      const questionQuery = query(questionsRef, where("game_id", "==", doc(db, "Games", idTheme)));
      const questionsSnapshot = await getDocs(questionQuery);

      const questions = await Promise.all(
        questionsSnapshot.docs.map(async (questionDoc) => {
          const questionData = { id: questionDoc.id, ...questionDoc.data() };

          const responsesRef = collection(db, "Responses");
          const responsesQuery = query(responsesRef, where("question_id", "==", questionDoc.ref));
          const responsesSnapshot = await getDocs(responsesQuery);

          const responses = responsesSnapshot.docs.map((responseDoc) => ({
            id: responseDoc.id,
            ...responseDoc.data(),
          }));

          // Optional: Sort responses by a specific key, e.g., id or title
          responses.sort((a, b) => (a.title > b.title ? 1 : -1));

          return {
            ...questionData,
            responses,
          };
        })
      );

      setQuizz(questions);
      setLoading(false);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      return [];
    }
  };

  useEffect(() => {
    fetchQuestionsWithResponses();
  }, []);

  if (loading) {
    return (
      <div className="center" style={{ display: "flex", flexGrow: 1 }}>
        <p>Chargement des questionnaires...</p>
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