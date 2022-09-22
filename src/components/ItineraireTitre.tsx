import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Itineraire from '../models/Itineraire';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { CardActionArea, Grid } from '@mui/material';

type Props = { 
  itineraire: Itineraire
}

const ItineraireTitre: React.FC = () => {


  return (
    <Grid container spacing={2}>
      <Grid item xs={1}>
        <Card>
        <CardActionArea>
            <Typography color="text.secondary" gutterBottom>
              Accueil
            </Typography>
          </CardActionArea>  
        </Card>
      </Grid>

      <Grid item xs={10} sx={{textAlign: 'center'}}>
          <Typography color="text.secondary" gutterBottom>
            Titre itineraire
          </Typography>
      </Grid>
    </Grid>
  );
}

export default ItineraireTitre; 
