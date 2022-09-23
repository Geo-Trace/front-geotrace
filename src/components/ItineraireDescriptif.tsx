import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Itineraire from '../models/Itineraire';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Box, Container } from '@mui/material';
import { grey } from '@mui/material/colors';

const Grey = grey[200];

type Props = { 
  itineraire: Itineraire
}

const ItineraireDescriptif: React.FC = () => {


  return (
        <Box sx={{ mt: 2,py: 22, alignContent: 'center', textAlign: 'center', bgcolor: Grey}}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui iusto incidunt corporis, accusantium quas inventore aspernatur ab. Optio, officia facere quidem rerum praesentium doloremque dicta nemo ea dolorum temporibus.
          </Typography>
        </Box>
  );
}

export default ItineraireDescriptif; 
