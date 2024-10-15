import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Grid from "@mui/material/Grid2";
import { Box, Button, Typography } from "@mui/material";
import HomeButton from "../components/HomeButton/HomeButton";
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <div style={{ display: 'flex', flexGrow: 1, flexDirection: "column", justifyContent: 'center', paddingInline: 50 }}>
        <Grid container justifyContent={"center"} alignItems={"center"} sx={{ marginBlock: 'auto' }}>
          <Grid size={9}>
            <Grid container justifyContent={"center"} alignItems={"center"} spacing={4} sx={{ marginBlock: 'auto' }}>
              <Grid size={{ sm: 12, md: 6 }}>
                <Typography
                  style={{
                    fontSize: 32,
                    fontWeight: 400,
                    textAlign: "left",
                  }}
                >
                  L’APPRENTISSAGE SIMPLIFIÉ SUR LES ENJEUX DES
                  <Typography
                    component={"span"}
                    style={{
                      fontSize: 32,
                      fontWeight: 400,
                      textAlign: "left",
                      color: 'red'
                    }}
                  >
                    {" "}RÉSEAUX SOCIAUX
                  </Typography>
                </Typography>
                <Button style={{ padding: 10 }} sx={{ width: '100%', background: 'linear-gradient(90deg, #0081A7 0%, #F07167 100%)', borderRadius: 1 }}>
                  <Typography color="white" fontWeight="900">
                    JE COMMENCE
                  </Typography>
                </Button>
              </Grid>
              <Grid size={{ sm: 12, md: 6 }}>
                <img src="/images/home.jpg" alt="Home Image" style={{ width: '100%' }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"} alignItems={"center"} spacing={6} style={{ marginBlock: 50 }}>
          <Grid size={{ xs: 11, sm: 10, md: 3 }}>
            <HomeButton title="127H" subtitle="De formation disponibles" color="#0081A7" />
          </Grid>
          <Grid size={{ xs: 11, sm: 10, md: 3 }}>
            <HomeButton title="230" subtitle="Établissements partenaires" color="#F07167" />
          </Grid>
          <Grid size={{ xs: 11, sm: 10, md: 3 }}>
            <HomeButton title="15" subtitle="Parcours par thèmes" color="#0081A7" />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
