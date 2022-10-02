import React from 'react';
import { render, screen } from '@testing-library/react';
import ItineraireList from '../pages/ItineraireList';
import ITINERAIRES from '../models/mock-itineraire.json'
import ItineraireCard from '../components/ItineraireCard';

test('renders ItineraireList', () => {

    render(<ItineraireList />);
    const titreItineraire = screen.getByText(/Circuit des 4 monts/i);
    expect(titreItineraire).toBeVisible();
});
