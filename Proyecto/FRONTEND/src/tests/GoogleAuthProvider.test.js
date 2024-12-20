import React from 'react'; /* se pone react, proque como babel lo traspasa*/
import { render, screen } from '@testing-library/react';
import GoogleAuthProvider from '../componentes/log/GoogleAuthProvider';

/*
prueba del component de GoogleAuthProvider para verificar si los hijos que se pasan al componnte se renderizan bien
entonces se renderiza el componente con el hijo <div>Children</div>
y ve si el componente child esta en el documento
*/

describe('GoogleAuthProvider', () => {
    test('renders children correctly', () => {
        render(
            <GoogleAuthProvider>
                <div>Children</div>
            </GoogleAuthProvider>
        );
    expect(screen.getByText('Children')).toBeInTheDocument();
    });
});


