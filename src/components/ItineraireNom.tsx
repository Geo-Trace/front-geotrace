import * as React from 'react';
import Itineraire from '../models/Itineraire';
import { lightGreen } from '@mui/material/colors';
import { Box, Typography } from '@mui/material';
import { brown } from '@mui/material/colors';

const Brown = brown[400];
const GreenLight = lightGreen[50];
const Green = lightGreen[300];

type Props = { 
  itineraire: Itineraire
}

const ItineraireNom: React.FC = () => {


  return (
    <Box>
      <Typography sx={{mt:5,mb: 5,border: 1,borderColor: Green,borderRadius: 1, color: Brown, bgcolor: GreenLight, textAlign: 'center',fontSize: 'h4.fontSize'}}>
          Alpage de Chargès 
      </Typography>
    </Box>
  );
}

export default ItineraireNom; 
