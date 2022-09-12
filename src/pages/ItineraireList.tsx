import { Container, createTheme, Grid} from "@mui/material";
import React from "react";
import ItineraireCard from "../components/ItineraireCard"

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // provisoire 
const theme = createTheme();

function ItineraireList() {
    return (
            <Container sx={{ py: 8 }} >
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <ItineraireCard />
                        </Grid>
                    ))}
                </Grid>
            </Container>
    )
}

export default ItineraireList;


