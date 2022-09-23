import { Card, CardContent, Container, Grid} from "@mui/material";
import ItineraireDescriptif from "../components/ItineraireDescriptif";
import ItineraireBoutonExporter from "../components/ItineraireBoutonExporter";
import ItineraireInfos from "../components/ItineraireInfos";
import ItineraireMap from "../components/ItineraireMap";
import ItineraireTitre from "../components/ItineraireTitre";
import Itineraire from "../models/Itineraire";
import { grey } from '@mui/material/colors';
import ItineraireBoutonAccueil from "../components/ItineraireBoutonAccueil";

const Grey = grey[200];




function ItineraireList() {

    return (
            <><Container>
                <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <ItineraireBoutonAccueil />
                    </Grid>
                </Grid>
                </CardContent>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            
                        </Grid>
                        <Grid item xs={8}>
                            <ItineraireTitre/>
                        </Grid>
                        <Grid item xs={2}>
                            
                        </Grid>
                    </Grid>
                </CardContent>
                <CardContent>
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
                </CardContent>
            </Container></>
            )
}

export default ItineraireList;

