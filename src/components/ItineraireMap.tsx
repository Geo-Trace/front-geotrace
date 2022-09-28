import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Itineraire from '../models/Itineraire';
import { Box, Card } from '@mui/material';
import { amber } from '@mui/material/colors';
import { grey } from '@mui/material/colors';

const lightGrey = grey[50];
const Grey = grey[500];

const lightAmber = amber[50];
const Amber = amber[300];

type Props = { 
  itineraire: Itineraire
}

const ItineraireMap: React.FC = () => {
  return (
    <Card sx ={{borderRadius: 1, padding: 3, bgcolor: lightAmber, justifyContent: 'center'}}>
      <CardMedia
            component="img"
            image={"https://i.postimg.cc/Bn2sH5PM/Circuit-des-4-monts.png"}
            sx= {{border: 1,borderColor : Grey}}
          />
    </Card>
  );
}

export default ItineraireMap; 
