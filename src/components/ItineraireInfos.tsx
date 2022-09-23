import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Itineraire from "../models/Itineraire";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Container, Grid } from "@mui/material";
import { PassThrough } from "stream";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';

const Grey = grey[200];

type Props = {
  itineraire: Itineraire;
};

const ItineraireInfos: React.FC = () => {
  return (
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Card sx={{bgcolor: Grey, textAlign:'center'}}>
            <h4>
              dif 4/5
            </h4>
          </Card>
        </Grid>

        <Grid item xs={2}>
          <Card sx={{bgcolor: Grey, textAlign:'center'}}>
            <h4>
            ↑↓ 3%
            </h4>
          </Card>
        </Grid>

        <Grid item xs={2}>
          <Card sx={{bgcolor: Grey, textAlign:'center'}}>
            <h4>
              15 km
            </h4>
          </Card>
        </Grid>

        <Grid item xs={2}>
          <Card sx={{bgcolor: Grey, textAlign:'center'}}>
            <h4>
              2h30
            </h4>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Stack sx={{ml:2,py: 2}} >
            <Rating name="note" defaultValue={2.5} precision={0.5}/>
          </Stack>
        </Grid>
      </Grid>
  );
};



export default ItineraireInfos;
