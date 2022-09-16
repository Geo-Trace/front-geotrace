import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Itineraire from '../models/Itineraire';

type Props = { 
  itineraire: Itineraire
}

const ItineraireCard: React.FC<Props> = ({ itineraire }) => {


  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={itineraire.image}
          alt={`photo ${itineraire.nom}`}
        />
        <CardContent sx={{ margin: '0px', padding: '0px', textAlign: 'center'}}>
          <Typography gutterBottom variant="h5" component="div">
            {itineraire.nom}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ItineraireCard; 
