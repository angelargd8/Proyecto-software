import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar2 from '../componentes/navbar/navbar';

describe('NavBar2', () => {
    test('navigates correctly', () => {
        render(
            <MemoryRouter>
                <NavBar2 />
            </MemoryRouter>
        );
        
        // Simula la navegación 
        fireEvent.click(screen.getByText('Contáctanos'));
        expect(window.location.pathname).toBe('/');
    });
});