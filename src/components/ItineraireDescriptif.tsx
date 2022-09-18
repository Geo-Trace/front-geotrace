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

const ItineraireDescriptif: React.FC = () => {


  return (
    <Card>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          Descriptif
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ItineraireDescriptif; 
