import { Container, Grid} from "@mui/material";
import React, {useState, useEffect} from "react";
import ItineraireCard from "../components/ItineraireCard"
import ItineraireCommentaire from "../components/ItineraireCommentaire";
import ItineraireRecherche from "../components/ItineraireRecherche";
import Itineraire from "../models/Itineraire";
import ITINERAIRES from "../models/mock-itineraire.json";
import { useNavigate } from 'react-router-dom'; 
import axios from "axios";




function ItineraireList() {
    
    const [itineraires, setItineaires] = useState<Itineraire[]>([]); 
    useEffect(() => {
        // fetch les donnée de API 
        console.log(process.env);
        axios.get(`http://${process.env.API_URL}:3000/itineraire`).then((res) => {
            console.log(process.env); 
            setItineaires(res.data);  
        })


            //setItineaires(ITINERAIRES);
    },[]);
    const navigate = useNavigate(); 

    const gotToItineraire = (id: string) => {
        navigate(`/itineraire/${id}`); 
    }
    
    return (
            <Container sx={{ py: 8 }} >
                <ItineraireRecherche />
                <Grid container spacing={4}>
                    {itineraires.map((itineraire) => (
                        <Grid item key={itineraire._id} xs={12} sm={6} md={4} onClick={() => gotToItineraire(itineraire._id)} >
                            <ItineraireCard itineraire={itineraire}  />
                        </Grid>
                    ))}
                </Grid>
            </Container>
    )
}

export default ItineraireList;


