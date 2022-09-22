import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Itineraire from '../models/Itineraire';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

type Props = { 
  itineraire: Itineraire
}

const ItineraireDescriptif: React.FC = () => {


  return (
      <Container>
        <Typography color="text.secondary" gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui iusto incidunt corporis, accusantium quas inventore aspernatur ab. Optio, officia facere quidem rerum praesentium doloremque dicta nemo ea dolorum temporibus.
        </Typography>
      </Container>
  );
}

export default ItineraireDescriptif; 
