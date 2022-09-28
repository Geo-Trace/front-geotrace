import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Itineraire from '../models/Itineraire';
import { Box, Card, Typography } from '@mui/material';
import { amber } from '@mui/material/colors';
import { grey } from '@mui/material/colors';


const Grey = grey[500];
const lightAmber = amber[50];

type Props = { 
  itineraire: Itineraire
}

const ItineraireMap: React.FC<Props> = ({ itineraire }) => {
  return (
    <Card sx ={{borderRadius: 1, padding: 3, bgcolor: lightAmber, justifyContent: 'center'}}>
      <CardMedia
              component="img"
              image={itineraire.image}
              sx= {{border: 1,borderColor : Grey}}
            />
      </Card>
  );
}

export default ItineraireMap; 
