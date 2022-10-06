import { Container, Grid} from "@mui/material";
import React, {useState, useEffect} from "react";
import ItineraireCard from "../components/ItineraireCard"
import ItineraireRecherche from "../components/ItineraireRecherche";
import Itineraire from "../models/Itineraire";
import { useNavigate } from 'react-router-dom'; 
import axios from "axios";




function ItineraireList() {
    
    const [itineraires, setItineaires] = useState<Itineraire[]>([]); 
    useEffect(() => {
        // fetch les donnée de API 
        axios.get(`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/itineraire`).then((res) => { 
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


