import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Itineraire from '../models/Itineraire';
import { Box } from '@mui/material';
import { amber } from '@mui/material/colors';

const lightAmber = amber[50];
const Amber = amber[300];

type Props = { 
  itineraire: Itineraire
}

const ItineraireMap: React.FC = () => {
  return (
    <Box sx ={{border: 1,borderColor: Amber, padding: 3, bgcolor: lightAmber, justifyContent: 'center' ,alignContent: 'center'}}>
      <CardMedia
            component="img"
            image={"https://i.postimg.cc/Bn2sH5PM/Circuit-des-4-monts.png"}
          />
    </Box>
  );
}

export default ItineraireMap; 
