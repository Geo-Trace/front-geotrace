import * as React from 'react';
import Button from '@mui/material/Button';
import { Container} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ItineraireMenuVertical: React.FC = () => {


  return (
    <Container sx={{mt: 8}}>
      <Button variant="text" color="success" href="/itineraire">
          Accueil
      </Button>
      <Button variant="text" color="success" endIcon={<SendIcon />}>
        Envoyer GPX
      </Button>
    </Container>
  );
}

export default ItineraireMenuVertical; 
