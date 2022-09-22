import { Card, CardContent, Container, Grid} from "@mui/material";
import {useState, useEffect} from "react";
import ItineraireDescriptif from "../components/ItineraireDescriptif";
import ItineraireInfos from "../components/ItineraireInfos";
import ItineraireMap from "../components/ItineraireMap";
import ItineraireTitre from "../components/ItineraireTitre";
import Itineraire from "../models/Itineraire";





function ItineraireList() {

    return (
            <><Container>
            <CardContent sx={{ margin: '0px', padding: '0px', textAlign: 'center', py: 8 }}>
                <Card>
                    <ItineraireTitre />
                </Card>
            </CardContent>
        </Container><Container sx={{ py: 8 }}>
                <Grid container spacing={2} sx={{margin : '100px'}}>
                    <Grid item xs={6}>
                        <ItineraireMap />
                    </Grid>
                    <Grid item xs={6}>
                        <ItineraireInfos />
                        <ItineraireDescriptif />
                    </Grid>
                </Grid>
            </Container></>
            )
}

export default ItineraireList;

