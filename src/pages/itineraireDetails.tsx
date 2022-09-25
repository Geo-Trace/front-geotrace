import { Box, Card, CardContent, Container, Grid} from "@mui/material";
import ItineraireDescriptif from "../components/ItineraireDescriptif";
import ItineraireBoutonExporter from "../components/ItineraireBoutonExporter";
import ItineraireInfos from "../components/ItineraireInfos";
import ItineraireMap from "../components/ItineraireMap";
import ItineraireNom from "../components/ItineraireNom";
import Itineraire from "../models/Itineraire";
import { grey } from '@mui/material/colors';
import ItineraireBoutonAccueil from "../components/ItineraireBoutonAccueil";

const Grey = grey[200];




function ItineraireList() {

    return (
            <><Container>
                <Box>
                    <ItineraireBoutonAccueil />
                    <ItineraireNom/>
                </Box>             
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <ItineraireMap />
                        </Grid>

                        <Grid item xs={6}>
                            <ItineraireInfos />
                            <ItineraireDescriptif />
                            <ItineraireBoutonExporter />
                        </Grid>
                    </Grid>
                </Box>
            </Container></>
            )
}

export default ItineraireList;

