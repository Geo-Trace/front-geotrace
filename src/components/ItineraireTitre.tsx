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

const ItineraireTitre: React.FC = () => {


  return (
      <Box sx={{bgcolor: Green,textAlign: 'center' }}>
          <h2>Titre itineraire</h2>
      </Box>
  );
}

export default ItineraireTitre; 
