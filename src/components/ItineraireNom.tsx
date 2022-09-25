import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Itineraire from '../models/Itineraire';
import { green } from '@mui/material/colors';
import { Box } from '@mui/material';

const Green = green[50];

type Props = { 
  itineraire: Itineraire
}

const ItineraireNom: React.FC = () => {


  return (
      <Box sx={{mt:5,mb: 5,bgcolor: Green, textAlign: 'center',}}>
          <h2>Nom itineraire</h2>
      </Box>
  );
}

export default ItineraireNom; 
