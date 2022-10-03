import { Container, Grid} from "@mui/material";
import React, {useState, useEffect} from "react";
import ItineraireCard from "../components/ItineraireCard"
import ItineraireCommentaire from "../components/ItineraireCommentaire";
import ItineraireRecherche from "../components/ItineraireRecherche";
import Itineraire from "../models/Itineraire";
import ITINERAIRES from "../models/mock-itineraire.json";




function ItineraireList() {
    
    const [itineraires, setItineaires] = useState<Itineraire[]>([]); 
    useEffect(() => {
        // code executer au lancement de la page 
            setItineaires(ITINERAIRES);
    },[]);
    
    return (
            <Container sx={{ py: 8 }} >
                <ItineraireRecherche />
                <Grid container spacing={4}>
                    {itineraires.map((itineraire) => (
                        <Grid item key={itineraire.id} xs={12} sm={6} md={4}>
                            <ItineraireCard itineraire={itineraire} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
    )
}

export default ItineraireList;


