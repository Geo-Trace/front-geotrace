import * as React from 'react';
import Typography from '@mui/material/Typography';
import Itineraire from '../models/Itineraire';
import { Box} from '@mui/material';


type Props = { 
  itineraire: Itineraire
}

const ItineraireDescriptif: React.FC = () => {


  return (
        <Box sx={{py: 24, alignContent: 'center', textAlign: 'center'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui iusto incidunt corporis, accusantium quas inventore aspernatur ab. Optio, officia facere quidem rerum praesentium doloremque dicta nemo ea dolorum temporibus.
        </Box>
  );
}

export default ItineraireDescriptif; 
