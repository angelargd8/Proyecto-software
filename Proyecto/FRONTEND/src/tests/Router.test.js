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

// test('renders Carrito component for /carrito route', async () => {
//   fetchMock.mockResponseOnce(JSON.stringify({ data: { message: 'Hello World' } }));

//   render(
//     <MemoryRouter initialEntries={['/carrito']}>
//       <AppRouter />
//     </MemoryRouter>
//   );

//   expect(await screen.findByText(/carrito/i)).toBeInTheDocument();
// }
// );

// test('renders Pago component for /pago route', async () => {
//   fetchMock.mockResponseOnce(JSON.stringify({ data: { message: 'Hello World' } }));

//   render(
//     <MemoryRouter initialEntries={['/pago']}>
//       <AppRouter />
//     </MemoryRouter>
//   );

//   expect(await screen.findByText(/Pago/i)).toBeInTheDocument();
// }
// );

// test('renders Resumen component for /resumen route', async () => {
//   fetchMock.mockResponseOnce(JSON.stringify({ data: { message: 'Hello World' } }));

//   render(
//     <MemoryRouter initialEntries={['/resumen']}>
//       <AppRouter />
//     </MemoryRouter>
//   );

//   expect(await screen.findByText(/Resumen de Pedido/i)).toBeInTheDocument();
// }
// );

// test('renders Contact component for /contact route', async () => {
//   fetchMock.mockResponseOnce(JSON.stringify({ data: { message: 'Hello World' } }));

//   render(
//     <MemoryRouter initialEntries={['/contact']}>
//       <AppRouter />
//     </MemoryRouter>
//   );

//   expect(await screen.findByText(/Contáctanos/i)).toBeInTheDocument();
// }
// );

// test('renders Signup component for /signup route', () => {
//   render(
//     <MemoryRouter initialEntries={['/signup']}>
//       <AppRouter />
//     </MemoryRouter>
//   );
//   expect(screen.getByText(/Signup/i)).toBeInTheDocument();
// });




// test('renders Resumen component for /resumen route', () => {
//     render(
//         <MemoryRouter initialEntries={['/resumen']}>
//         <AppRouter />
//         </MemoryRouter>
//     );
//     expect(screen.getByText(/Resumen/i)).toBeInTheDocument();
//     }
// );

// test('renders Contact component for /contact route', () => {
//     render(
//         <MemoryRouter initialEntries={['/contact']}>
//         <AppRouter />
//         </MemoryRouter>
//     );
//     expect(screen.getByText(/Contact/i)).toBeInTheDocument();
//     }
// );


// test('renders Configuracion component for /configuracion route', () => {

//     render(
//         <MemoryRouter initialEntries={['/configuracion']}>
//         <AppRouter />
//         </MemoryRouter>
//     );
//     expect(screen.getByText(/Configuracion/i)).toBeInTheDocument();
//     }
// );


// test('renders Home component for / route', () => {
//     render(
//         <MemoryRouter initialEntries={['/']}>
//         <AppRouter />
//         </MemoryRouter>
//     );
//     expect(screen.getByText(/Home/i)).toBeInTheDocument();
//     }
// );

// test('renders AgregarProducto component for /agregarProducto route', () => {
//     render(
//         <MemoryRouter initialEntries={['/agregarProducto']}>
//         <AppRouter />
//         </MemoryRouter>
//     );
//     expect(screen.getByText(/AgregarProducto/i)).toBeInTheDocument();
//     }
// );

// test('renders AgregarCategoria component for /agregarCategoria route', () => {
//     render(
//         <MemoryRouter initialEntries={['/agregarCategoria']}>
//         <AppRouter />
//         </MemoryRouter>
//     );
//     expect(screen.getByText(/AgregarCategoria/i)).toBeInTheDocument();
//     }
// );