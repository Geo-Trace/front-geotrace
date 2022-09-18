import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Itineraire from '../models/Itineraire';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

type Props = { 
  itineraire: Itineraire
}

const ItineraireMap: React.FC = () => {


  return (
    <Card>
      <CardMedia
      component="img"
      alt="green iguana"
      image="https://i.postimg.cc/Bn2sH5PM/Circuit-des-4-monts.png"
      />
    </Card>
  );
}

export default ItineraireMap; 
