import * as React from 'react';
import Itineraire from '../models/Itineraire';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { amber } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';
import { lightGreen } from '@mui/material/colors';

const Amber = amber[50];
const Green = lightGreen[300];

type Props = { 
  itineraire: Itineraire
}

const ItineraireBoutonAccueil: React.FC = () => {


  return (
    <Container sx={{mt: 8}}>
      <Button variant="text" color="success">
        Accueil
      </Button>
      <Button variant="text" color="success" endIcon={<SendIcon />}>
        Envoyer GPX
      </Button>
    </Container>
  );
}

export default ItineraireBoutonAccueil; 
