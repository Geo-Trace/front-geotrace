import { Container, Grid} from "@mui/material";
import ItineraireDescriptif from "../components/ItineraireDescriptif";
import ItineraireBoutonExporter from "../components/ItineraireBoutonExporter";
import ItineraireInfos from "../components/ItineraireInfos";
import ItineraireMap from "../components/ItineraireMap";
import ItineraireNom from "../components/ItineraireNom";
import Itineraire from "../models/Itineraire";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';


function ItineraireDetails() {

    const [itineraire, setItineaire] = useState<Itineraire>(); 
    const urlParams = useParams();
    useEffect(() => {
        // fetch les donnée de API 
        axios.get(`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/itineraire/${urlParams.id}`).then((res) => {
            setItineaire(res.data);  
        })


            //setItineaires(ITINERAIRES);
    },[]);

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
                            <ItineraireDescriptif itineraire={itineraire} />
                            <ItineraireBoutonExporter />
                        </Grid>
                    </Grid>
                    </div> ) : (<div>Page non trouver</div>) }
            </Container>
            )
}

export default ItineraireDetails;

