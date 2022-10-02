import * as React from 'react';
import Itineraire from '../models/Itineraire';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { amber } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';
import { lightGreen } from '@mui/material/colors';
import { Link } from "react-router-dom";

const Amber = amber[50];
const Green = lightGreen[300];

type Props = {
  itineraire: Itineraire
}

const ItineraireMenuVertical: React.FC = () => {


  return (
    <Container sx={{ mt: 8 }}>
      
      <Link to="/">
        <Button variant="text" color="success">
          Accueil
        </Button>
      </Link>

      <Button variant="text" color="success" endIcon={<SendIcon />}>
        Envoyer GPX
      </Button>
    </Container>
  );
}

export default ItineraireMenuVertical; 
