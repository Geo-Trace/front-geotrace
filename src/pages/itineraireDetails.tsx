import { Container, Grid} from "@mui/material";
import {useState, useEffect} from "react";
import ItineraireDescriptif from "../components/ItineraireDescriptif";
import ItineraireInfos from "../components/ItineraireInfos";
import ItineraireMap from "../components/ItineraireMap";
import Itineraire from "../models/Itineraire";





function ItineraireList() {

    return (
            <Container sx={{ py: 8 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <ItineraireMap />
                    </Grid>
                    <Grid item xs={6}>
                        <ItineraireInfos/>
                        <ItineraireDescriptif />
                    </Grid>
        
                </Grid>
            </Container>
            )
}

export default ItineraireList;

