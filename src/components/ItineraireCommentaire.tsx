import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Itineraire from '../models/Itineraire';
import { CardActionArea, Grid, TextField } from '@mui/material';
import { sizeHeight } from '@mui/system';

type Props = { 
  itineraire: Itineraire
}

const ItineraireCommentaire: React.FC = () => {


  return (
    <TextField id="outlined-basic" label="Commentaire" variant="outlined" sx={{mt:8}}/>
  );
}

export default ItineraireCommentaire; 
