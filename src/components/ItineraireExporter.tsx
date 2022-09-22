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

const ItineraireExporter: React.FC = () => {


  return (
    <Grid container spacing={2} sx={{ mt:2 , padding: '0px', textAlign: 'center',flexDirection: 'row-reverse' }} >
      <Grid item xs={3}>
        <Card>
          <CardActionArea>
            <Typography>
              Télécharger GPX
            </Typography>
          </CardActionArea> 
        </Card>
      </Grid>
    </Grid>
  );
}

export default ItineraireExporter; 
