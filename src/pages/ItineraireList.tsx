import { Container, Grid} from "@mui/material";
import React, {useState, useEffect} from "react";
import ItineraireCard from "../components/ItineraireCard"
import Itineraire from "../models/Itineraire";
import ITINERAIRES from "../models/mock-itineraire.json";
import { useNavigate } from 'react-router-dom'; 




function ItineraireList() {
    
    const [itineraires, setItineaires] = useState<Itineraire[]>([]); 
    useEffect(() => {
        // code executer au lancement de la page 
            setItineaires(ITINERAIRES);
    },[]);
    const navigate = useNavigate(); 

    const gotToItineraire = (id: number) => {
        navigate(`/itineraire/${id}`); 
    }
    
    return (
            <Container sx={{ py: 8 }} >
                <Grid container spacing={4}>
                    {itineraires.map((itineraire) => (
                        <Grid item key={itineraire.id} xs={12} sm={6} md={4} onClick={() => gotToItineraire(itineraire.id)} >
                            <ItineraireCard itineraire={itineraire}  />
                        </Grid>
                    ))}
                </Grid>
            </Container>
    )
}

export default ItineraireList;


