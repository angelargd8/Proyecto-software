import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FloatingButton from '../componentes/floatingButton/floatingButton';
import { useLocation } from 'react-router-dom';

// Mock de useLocation
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: jest.fn(),
}));

describe('FloatingButton visibility', () => {
    test('is visible on /home', () => {
        useLocation.mockReturnValue({ pathname: '/home' });
        render(<FloatingButton />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('is visible on /', () => {
        useLocation.mockReturnValue({ pathname: '/' });
        render(<FloatingButton />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('is visible on /contact', () => {
        useLocation.mockReturnValue({ pathname: '/contact' });
        render(<FloatingButton />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

});