import * as React from 'react';
import Itineraire from '../models/Itineraire';
import { lightGreen } from '@mui/material/colors';
import { Box } from '@mui/material';

const GreenLight = lightGreen[50];
const Green = lightGreen[300];

type Props = { 
  itineraire: Itineraire
}

const ItineraireNom: React.FC = () => {


  return (
      <Box sx={{mt:5,mb: 5,border: 1,borderColor: Green,borderRadius: 1, bgcolor: GreenLight, textAlign: 'center',}}>
          <h2>Nom itineraire</h2>
      </Box>
  );
}

export default ItineraireNom; 
