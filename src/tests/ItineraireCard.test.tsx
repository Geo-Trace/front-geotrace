import React from 'react';
import { render, screen } from '@testing-library/react';
import ItineraireCard from '../components/ItineraireCard';
import Itineraire from '../models/Itineraire';

test('renders ItineraireCard', () => {
    const itineraireTest = new Itineraire(1, "La route de l'enfer", "VTT", 69, 42, 45, 'http://image.jpg', "59000");
    render(<ItineraireCard itineraire={itineraireTest} />);
    const titreItineraire = screen.getByText(/La route de l'enfer/i);
    expect(titreItineraire).toBeInTheDocument();
});
