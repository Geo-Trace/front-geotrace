import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Itineraire from '../models/Itineraire';
import { Box } from '@mui/material';
import { amber } from '@mui/material/colors';

const Amber = amber[50];

type Props = { 
  itineraire: Itineraire
}

const ItineraireMap: React.FC = () => {
  return (
    <Box sx ={{padding: 3, bgcolor: Amber, justifyContent: 'center' ,alignContent: 'center'}}>
      <CardMedia
            component="img"
            image={"https://i.postimg.cc/Bn2sH5PM/Circuit-des-4-monts.png"}
          />
    </Box>
  );
}

export default ItineraireMap; 
