import * as React from 'react';
import Typography from '@mui/material/Typography';
import Itineraire from '../models/Itineraire';
import { brown } from '@mui/material/colors';

const Brown = brown[500]

type Props = { 
  itineraire: Itineraire
}

const ItineraireDescriptif: React.FC<Props> = ({itineraire}) => {


  return (
        <Typography sx={{padding: 1, mt:8, alignContent: 'center', textAlign: 'justify',fontWeight: 'medium',fontSize: 'h6.fontSize',color: Brown}}>
          {itineraire.descriptif}
        </Typography>
  );
}

export default ItineraireDescriptif; 
