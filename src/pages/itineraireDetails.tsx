import { Box, Card, CardContent, Container, Grid} from "@mui/material";
import ItineraireDescriptif from "../components/ItineraireDescriptif";
import ItineraireBoutonExporter from "../components/ItineraireBoutonExporter";
import ItineraireInfos from "../components/ItineraireInfos";
import ItineraireMap from "../components/ItineraireMap";
import ItineraireNom from "../components/ItineraireNom";
import Itineraire from "../models/Itineraire";
import ITINERAIRES from "../models/mock-itineraire.json";
import { grey } from '@mui/material/colors';
import ItineraireCommentaire from "../components/ItineraireCommentaire";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Grey = grey[200];

function ItineraireDetails() {

    const [itineraire, setItineaire] = useState<Itineraire>(); 
    const urlParams = useParams();
    useEffect(() => {
        setItineaire(ITINERAIRES.find(element => element.id.toString() == urlParams.id))
    }, []); 

    return (
            <Container>
                {itineraire ? (
                    <div>
                    <ItineraireNom itineraire={itineraire}/>            
                    <Grid container spacing={2}>
                        <Grid item xs={6}>

                            <ItineraireMap itineraire={itineraire}/>
                        </Grid>

                        <Grid item xs={6}>
                            <ItineraireInfos itineraire={itineraire}/>
                            <ItineraireDescriptif />
                            <ItineraireBoutonExporter />
                        </Grid>
                    </Grid>
                    </div> ) : (<div>Page non trouver</div>) }
            </Container>
            )
}

export default ItineraireDetails;

