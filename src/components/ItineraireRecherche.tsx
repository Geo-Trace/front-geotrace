import * as React from 'react';
import {Box, TextField } from '@mui/material';
import Itineraire from '../models/Itineraire';
import { lightGreen } from '@mui/material/colors';

const Green = lightGreen[300];

const ItineraireRecherche: React.FC = () => {


    return (
      <Box sx = {{mb :5}}>
        <TextField 
          fullWidth 
          id="outlined-basic" 
          label="Rechercher un itineraire" 
          variant="outlined" 
          color ="success" 
          placeholder="nom, ville, region..."
        />
      </Box>
    );
    }

export default ItineraireRecherche;