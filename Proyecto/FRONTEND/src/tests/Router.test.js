import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../componentes/router.jsx';
// import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

test('renders Home component for /home route', async () => {
  fetchMock.mockResponseOnce(JSON.stringify({ data: { message: 'Hello World' } }));

  render(
    <MemoryRouter initialEntries={['/home']}>
      <AppRouter />
    </MemoryRouter>
  );

  expect(await screen.findByText(/Bienvenido a la página de inicio/i)).toBeInTheDocument();
});


test('renders Login component for /login route', async () => {
  fetchMock.mockResponseOnce(JSON.stringify({ data: { message: 'Hello World' } }));

  render(
    <MemoryRouter initialEntries={['/login']}>
      <AppRouter />
    </MemoryRouter>
  );

  expect(await screen.findByText(/Inicia sesión/i)).toBeInTheDocument();
});

test('renders Signup component for /signup route', async () => {
  fetchMock.mockResponseOnce(JSON.stringify({ data: { message: 'Hello World' } }));

  render(
    <MemoryRouter initialEntries={['/signup']}>
      <AppRouter />
    </MemoryRouter>
  );

  expect(await screen.findByText(/Registro/i)).toBeInTheDocument();
});
