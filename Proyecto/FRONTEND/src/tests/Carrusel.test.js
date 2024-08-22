import React from 'react';
import { render, fireEvent, getByRole } from '@testing-library/react';
import Carrusel from '../componentes/carrito/carrusel';

test('renders the Carrusel component and checks existance', () => {
  const { getByText } = render(<Carrusel />);

  const radioItem1 = getByText('Brillantina Surtida');
  expect(radioItem1).toBeInTheDocument()

  const radioItem2 = getByText('Ojos Moviles');
  expect(radioItem2).toBeInTheDocument()

  const radioItem3 = getByText('Pegatinas');
  expect(radioItem3).toBeInTheDocument()
});

test('renders the Carrusel component and checks initial state', () => {
  const {getByRole} = render(<Carrusel/>)

  const radioItem1 = getByRole('radio', { name: 'Brillantina Surtida song' });
  expect(radioItem1).toBeChecked();
  
  const radioItem2 = getByRole('radio', { name: 'Ojos Moviles song' });
  expect(radioItem2).not.toBeChecked();
  
  const radioItem3 = getByRole('radio', { name: 'Pegatinas song' });
  expect(radioItem3).not.toBeChecked();

})

test('changes selection when a radio input is clicked', () => {
  const { getByRole } = render(<Carrusel />);

  const radioItem2 = getByRole('radio', {name: "Ojos Moviles song"});
  fireEvent.click(radioItem2);
  
  // Verifica que ahora el input "item-2" esté marcado
  expect(radioItem2).toBeChecked();
  
  // Verifica que el input "item-1" ya no esté marcado
  const radioItem1 = getByRole('radio', {name: "Brillantina Surtida song"});
  expect(radioItem1).not.toBeChecked();
});


