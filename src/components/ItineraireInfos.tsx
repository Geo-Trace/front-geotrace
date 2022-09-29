import * as React from "react";
import Itineraire from "../models/Itineraire";
import { Grid, Typography, Card, Rating } from "@mui/material";
import { grey } from '@mui/material/colors';

const lightGrey = grey[50];
const Grey = grey[500];

type Props = {
  itineraire: Itineraire;
};

const ItineraireInfos: React.FC<Props> = ({itineraire}) => {
  return (
    
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Typography sx={{ textAlign: 'center',color: Grey }}>
            Difficulté
          </Typography>
          <Card sx={{ padding: 1, bgcolor: lightGrey, textAlign: 'center' }}>
            <Typography>
              {itineraire.difficulte}/5
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={2}>
          <Typography sx={{ textAlign: 'center',color: Grey }}>
            Dénivelé
          </Typography>
          <Card sx={{ padding: 1, bgcolor: lightGrey, textAlign: 'center' }}>
            <Typography>
            {itineraire.denivele} %
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={2}>
          <Typography sx={{ textAlign: 'center',color: Grey }}>
            Distance
          </Typography>
          <Card sx={{ padding: 1, bgcolor: lightGrey, textAlign: 'center' }}>
            <Typography>
            {itineraire.distance} km
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={2}>
          <Typography sx={{ textAlign: 'center',color: Grey }}>
            Durée
          </Typography>
          <Card sx={{ padding: 1, bgcolor: lightGrey, textAlign: 'center' }}>
            <Typography>
              {itineraire.distance/5}
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={4} sx={{ textAlign: 'right' }}>
          <Rating name="popularité" defaultValue={2.5} precision={0.5}sx={{ mt: 4 }} />
        </Grid>
      </Grid>

  );
};



export default ItineraireInfos;
