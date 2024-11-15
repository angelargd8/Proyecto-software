import React from 'react';
import { render, screen } from '@testing-library/react';
import AgregarCategoriaHelp from '../componentes/config/help/agregarCategoriaHelp';
import AgregarUsuarioHelp from '../componentes/config/help/agregarUsuarioHelp';
import Help from '../componentes/config/help/help';

describe('Help', () => {
    test('renders Help correctly', () => {
        render(<Help />);
    });
});

describe('AgregarCategoriaHelp', () => {
    test('renders AgregarCategoriaHelp correctly', () => {
        render(<AgregarCategoriaHelp />);
    });
});

describe('AgregaUsuarioHelp', () => {
    test('renders AgregarUsuarioHelp correctly', () => {
        render(<AgregarUsuarioHelp />);
    });

});