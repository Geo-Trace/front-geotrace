import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Itineraire from '../models/Itineraire';
import { CardActionArea } from '@mui/material';

type Props = { 
  itineraire: Itineraire
}

const ItineraireCommentaire: React.FC = () => {


  return (
      <Card>
        <CardActionArea>
            <Typography sx={{ bgcolor: 'primary.main'}} >
              Commentaire
            </Typography>
          </CardActionArea>  
      </Card>

  );
}

export default ItineraireCommentaire; 
