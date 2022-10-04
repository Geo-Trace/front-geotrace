import * as React from 'react';
import Button from '@mui/material/Button';
import { Container} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';

const ItineraireMenuVertical: React.FC = () => {


  return (
    <Container sx={{ mt: 8 }}>
      
      <Link to="/">
        <Button variant="text" color="success">
          Accueil
        </Button>
      </Link>

      <Button variant="text" color="success" endIcon={<SendIcon />}>
        Envoyer GPX
      </Button>
    </Container>
  );
}

export default ItineraireMenuVertical; 
