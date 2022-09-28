import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Itineraire from '../models/Itineraire';
import { Box, Card } from '@mui/material';
import { amber } from '@mui/material/colors';
import { grey } from '@mui/material/colors';

const Grey = grey[50];
const lightAmber = amber[50];
const Amber = amber[300];

type Props = { 
  itineraire: Itineraire
}

const ItineraireMap: React.FC = () => {
  return (
    <Card sx ={{borderRadius: 1, padding: 3, bgcolor: Grey, justifyContent: 'center'}}>
      <CardMedia
            component="img"
            image={"https://i.postimg.cc/Bn2sH5PM/Circuit-des-4-monts.png"}
          />
    </Card>
  );
}

export default ItineraireMap; 
