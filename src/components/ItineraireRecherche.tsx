import * as React from 'react';
import {TextField } from '@mui/material';


const ItineraireRecherche: React.FC = () => {


    return (
        <form noValidate autoComplete="on">
        <TextField id="outlined-basic" label="Rechercher un itineraire" variant="outlined" color ="success" placeholder="nom, ville, region..." sx={{mt:5,width: 800}}/>
      </form>
    );
    }

export default ItineraireRecherche;