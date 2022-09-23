import * as React from 'react';
import Itineraire from '../models/Itineraire';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';

type Props = { 
  itineraire: Itineraire
}

const ItineraireBoutonExporter: React.FC = () => {


  return (
    <Grid container spacing={2} sx={{ mt:2 , padding: '0px', textAlign: 'center',flexDirection: 'row-reverse' }} >
      <Grid item xs={4}>
        <Button variant="outlined">
          Télécharger GPX
        </Button> 
      </Grid>
    </Grid>
  );
}

export default ItineraireBoutonExporter; 
