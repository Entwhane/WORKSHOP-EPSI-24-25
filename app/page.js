import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Grid from "@mui/material/Grid2";
import { Box, Button, Typography } from "@mui/material";
import HomeButton from "../components/HomeButton/HomeButton";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="col" style={{ justifyContent: 'space-around', backgroundColor: 'white' }}>
      <div className="col" style={{ flexGrow: 1, justifyContent: 'space-around', marginTop: 50, paddingInline: 50 }}>
        <Grid container justifyContent={"center"} alignItems={"center"} sx={{ marginBlock: 'auto' }}>
          <Grid size={9} container justifyContent={"center"} alignItems={"center"} spacing={4} sx={{ marginBlock: 'auto' }}>
            <Grid size={{ sm: 12, md: 6 }} sx={{ minHeight: "100%" }} >
              <Typography
                style={{
                  fontSize: 32,
                  fontWeight: 400,
                  textAlign: "left",
                  fontFamily: 'ClashDisplay-Regular'
                }}
              >
                L’APPRENTISSAGE SIMPLIFIÉ SUR LES ENJEUX DES
                <Typography
                  component={"span"}
                  style={{
                    fontSize: 32,
                    fontWeight: 600,
                    textAlign: "left",
                    fontFamily: 'ClashDisplay-Bold',
                    background: 'linear-gradient(90deg, #F07167 0%, #FDFCDC 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {" "}RÉSEAUX SOCIAUX
                </Typography>
              </Typography>
              <Button style={{ padding: 10, marginTop: 20 }} sx={{ width: '270px', background: 'linear-gradient(90deg, #0081A7 0%, #F07167 100%)', borderRadius: 1 }}>
                <Typography color="white" fontWeight="900" style={{ fontFamily: 'ClashDisplay-Regular' }}>
                  JE COMMENCE
                </Typography>
              </Button>
            </Grid>
            <Grid size={6} sx={{ display: { xs: 'none', md: 'block' } }}>
              <img src="/images/home.jpg" alt="Home Image" style={{ width: '100%', padding: 10 }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid container size={9} justifyContent={"center"} alignItems={"center"} spacing={4} style={{ marginBlock: 20, marginTop: 150, marginBottom: 100 }}>
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
    </div>
  );
}
