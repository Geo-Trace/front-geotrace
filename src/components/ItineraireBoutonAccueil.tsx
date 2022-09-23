import * as React from 'react';
import Itineraire from '../models/Itineraire';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';



type Props = { 
  itineraire: Itineraire
}

const ItineraireBoutonAccueil: React.FC = () => {


  return (
    <Box>
      <Button variant="outlined" sx={{mr: 2}}>
        Accueil
      </Button>
      <Button variant="outlined">
        Envoyer mon GPX
      </Button>
    </Box>
  );
}

export default ItineraireBoutonAccueil; 
