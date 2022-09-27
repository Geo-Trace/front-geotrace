import * as React from "react";
import Card from "@mui/material/Card";
import Itineraire from "../models/Itineraire";
import { Grid, Typography } from "@mui/material";
import Rating from '@mui/material/Rating';
import { grey } from '@mui/material/colors';



const lightGrey = grey[50];
const Grey = grey[500];


type Props = {
  itineraire: Itineraire;
};

const ItineraireInfos: React.FC = () => {
  return (
    <><Grid container spacing={2} sx={{ textAlign: 'center',color: Grey }}>
      <Grid item xs={2}>
        <Typography>
          Difficulté
        </Typography>
      </Grid>

      <Grid item xs={2}>
        <Typography>
          Dénivelé
        </Typography>
      </Grid>

      <Grid item xs={2}>
        <Typography>
          Distance
        </Typography>
      </Grid>

      <Grid item xs={2}>
        <Typography>
          Durée
        </Typography>
      </Grid>

      
    </Grid><Grid container spacing={2}>
        <Grid item xs={2}>
          <Card sx={{ padding: 1, bgcolor: lightGrey, textAlign: 'center' }}>
            <Typography>
              4/5
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={2}>
          <Card sx={{ padding: 1, bgcolor: lightGrey, textAlign: 'center' }}>
            <Typography>
              3%
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={2}>
          <Card sx={{ padding: 1, bgcolor: lightGrey, textAlign: 'center' }}>
            <Typography>
              15 km
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={2}>
          <Card sx={{ padding: 1, bgcolor: lightGrey, textAlign: 'center' }}>
            <Typography>
              2h30
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={4} sx={{ textAlign: 'right' }}>
          <Rating name="popularité" defaultValue={2.5} precision={0.5} sx={{ padding: 1 }} />
        </Grid>
      </Grid></>
  );
};



export default ItineraireInfos;
