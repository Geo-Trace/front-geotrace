import * as React from 'react';
import Typography from '@mui/material/Typography';
import Itineraire from '../models/Itineraire';
import { brown } from '@mui/material/colors';

const Brown = brown[500]

type Props = { 
  itineraire: Itineraire
}

const ItineraireDescriptif: React.FC = () => {


  return (
        <Typography sx={{padding: 1, mt:8, alignContent: 'center', textAlign: 'justify',fontWeight: 'medium',fontSize: 'h6.fontSize',color: Brown}}>
          Du hameau des Gourniers (1477m), splendide randonnée en boucle à la journée, en grande partie hors sentier par un itinéraire en crêtes fort esthétique, enchaînant trois sommets : Revire Souléou (2717m), Roche Méane (2651m), le Piarra (2633m). Son caractère aérien et alpin fait que ce parcours, loin d’être de l’alpinisme, est néanmoins une randonnée sérieuse et sportive réservée aux randonneurs confirmés aimant flirter avec le ciel, où rares sont les gens qui s’y aventurent. Musique du vent, solitude et jolies sensations garanties. – Auteur : Thierry GARCIN
        </Typography>
  );
}

export default ItineraireDescriptif; 
