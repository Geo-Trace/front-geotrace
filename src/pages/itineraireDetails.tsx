import { Card, CardContent, Container, Grid} from "@mui/material";
import ItineraireDescriptif from "../components/ItineraireDescriptif";
import ItineraireExporter from "../components/ItineraireExporter";
import ItineraireInfos from "../components/ItineraireInfos";
import ItineraireMap from "../components/ItineraireMap";
import ItineraireTitre from "../components/ItineraireTitre";
import Itineraire from "../models/Itineraire";





function ItineraireList() {

    return (
            <><Container>
                <CardContent sx={{ margin: 2, padding: '0px', textAlign: 'center', py: 8 }}>
                    <Card>
                        <ItineraireTitre />
                    </Card>
                </CardContent>
                <CardContent sx={{ margin: '0px', padding: '0px', textAlign: 'center', py: 8 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <ItineraireMap />
                        </Grid>
                        <Grid item xs={6}>
                            <ItineraireInfos />
                            <Card sx={{ mt:2 , padding: '0px', textAlign: 'center', py: 8 }}>
                                <ItineraireDescriptif />
                            </Card>
                            <ItineraireExporter />
                        </Grid>
                    </Grid>
                </CardContent>
            </Container></>
            )
}

export default ItineraireList;

