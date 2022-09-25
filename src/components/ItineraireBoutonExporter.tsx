import * as React from 'react';
import Itineraire from '../models/Itineraire';
import Button from '@mui/material/Button';
import { Box} from '@mui/material';

type Props = { 
  itineraire: Itineraire
}

const ItineraireBoutonExporter: React.FC = () => {


  return (
  <Box sx={{textAlign: 'right'}}>
    <Button variant="outlined">
      Télécharger GPX
    </Button>
  </Box>

  );
}

export default ItineraireBoutonExporter; 
