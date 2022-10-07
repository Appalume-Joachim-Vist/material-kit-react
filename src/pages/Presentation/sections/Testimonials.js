/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
import kiLogo from "assets/images/logos/rgb-logos/ki_logo_rgb.png";
import mfLogo from "assets/images/logos/rgb-logos/MF_logo_BLACK.png";
import apLogo from "assets/images/logos/rgb-logos/logo_appalume_crop.png";
import hbbsLogo from "assets/images/logos/rgb-logos/HBBF.png";
import azLogo from "assets/images/logos/rgb-logos/AZ_RGB_H_COL.png";
import kmbsLogo from "assets/images/logos/rgb-logos/KMBS.png";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Testimonials</MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              company="Rektor Karolinska Institutet"
              name="Ole Petter Ottersen"
              review="Som rektor vid Karolinska Institutet är studenternas utveckling alltid min högsta prioritet.
              Vi har ett universitet i världsklass men utan ett nav för möten, nätverk och samarbeten kan studenternas lärande inte uppnå sin fulla potential. Därför är Framtidens Kårhus ett oerhört viktigt projekt. Studenterna behöver en plats där de kan utvecklas och möta andra studenter, representanter för sjukvård, myndigheter och näringsliv samt lärare och forskare och samtala om viktiga framtidsfrågor. Framtidens Kårhus blir en mötesplats för medicinens frontlinje och ger våra studenter möjlighet att utvecklas på ett personligt plan utöver allt som utbildningen i övrigt ger."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              company="MF Ordförande 2018"
              name="Iris Peña Arriarán"
              review="Utan MF och vårt kårhus hade jag personligen inte blivit den läkare jag är idag. Jag har utvecklats som människa och blivit vuxen innanför dess väggar. 
              MF är en gemenskap man bär med sig resten av livet och det är alltid lika spännande när man träffar en före detta MF aktiv, ofta flera generationer äldre eller yngre, som har sina egna historier från huset att dela. 
              Jag kommer alltid att vilja vara en aktiv alumn och följer med spänning den utveckling som sker just nu! Vi måste fortsätta att stödja vår kår, vårt kårhus och dess fortlevnad jämte vårt alma mater KI som vore desto fattigare utan det stora engagemang som Medicinska Föreningen uppmuntrar bland studenterna."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              company="Medicinska Föreningens Ordförande 1984, Hälsa och -sjukvårdsdirektör SLSO"
              name="Mikael Ohrling"
              review="Vid en tidpunkt för snart fyra decennier sedan stod vi studenter vid Karolinska Institutet inför katastrofen att bli 'kårhuslösa'. Som Ordförande vid MF fick jag ansvar för bildandet av en kårhusstiftelse som förvärvade den 'gamla flygen' och uppförde det 'nya kårhuset'. 
              Mellan det 'gamla' och det 'nya' kårhuset levde vi nära två år utan eget hus. Det var en smärtsam period. Det blev uppenbart för oss alla att ett eget hus är 'hjärtat' i en studentkår [...] Framtidens Kårhus stärker studentkåren som mötesplats. Här kommer våra framtida kollegor och medarbetare kunna utvecklas. Mitt på campus av ett av världens mest framstående medicinska universitet erbjuds unika möten och oanade möjligheter."
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <MKTypography variant="h2" textAlign="center" paddingBottom="25px">
          Our contributors
        </MKTypography>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={6} md={4} lg={2}>
            <a href="https://www.ki.se" target="_blank" rel="noreferrer">
              <MKBox
                component="img"
                src={kiLogo}
                alt="Karolinska Institutet"
                width="100%"
                opacity={0.6}
              />
            </a>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <a href="https://www.medicinskaforeningen.se" target="_blank" rel="noreferrer">
              <MKBox
                component="img"
                src={mfLogo}
                alt="Medicinska Föreningen"
                width="100%"
                opacity={0.6}
              />
            </a>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <a href="https://www.az.se" target="_blank" rel="noreferrer">
              <MKBox component="img" src={azLogo} alt="Astra Zeneca" width="100%" opacity={0.6} />
            </a>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={hbbsLogo}
              alt="Hans och Barbera"
              width="100%"
              opacity={0.6}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <a href="https://www.beijerstiftelsen.se" target="_blank" rel="noreferrer">
              <MKBox component="img" src={kmbsLogo} alt="Beijer" width="100%" opacity={0.6} />
            </a>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <a href="https://www.appalume.se" target="_blank" rel="noreferrer">
              <MKBox component="img" src={apLogo} alt="Appalume AB" width="100%" opacity={0.6} />
            </a>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
