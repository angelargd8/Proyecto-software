import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../componentes/contact/contact';

describe('Contact', () => {
    test('renders contact information correctly', () => {
        render(<Contact />);
        
        //Verifica que el texto este
        expect(screen.getByText('Contáctanos')).toBeInTheDocument();
        
        //Verifica que el texto este
        expect(screen.getByText('¡Estamos para servirte!')).toBeInTheDocument();
        
        //Verifica que el número de teléfono este
        expect(screen.getByText(': 3706-7222')).toBeInTheDocument();
        
        //Verifica que el correo electrónico este
        expect(screen.getByText(':picolinescolor@gmail.com')).toBeInTheDocument();
    });
});