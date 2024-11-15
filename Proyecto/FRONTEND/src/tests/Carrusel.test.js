import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Carrusel from "../componentes/carrito/PagoComponents/carrusel";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(<Router>{ui}</Router>);
};

test("renders the Carrusel component and checks existance", () => {
  const { getByText } = renderWithRouter(<Carrusel />);

  const radioItem1 = getByText("Brillantina Surtida");
  expect(radioItem1).toBeInTheDocument();

  const radioItem2 = getByText("Ojos Moviles");
  expect(radioItem2).toBeInTheDocument();

  const radioItem3 = getByText("Pegatinas");
  expect(radioItem3).toBeInTheDocument();
});

test("renders the Carrusel component and checks initial state", () => {
  const { getByLabelText } = renderWithRouter(<Carrusel />);

  const radioItem1 = getByLabelText("Brillantina Surtida");
  expect(radioItem1).toBeChecked();

  const radioItem2 = getByLabelText("Ojos Moviles");
  expect(radioItem2).not.toBeChecked();

  const radioItem3 = getByLabelText("Pegatinas");
  expect(radioItem3).not.toBeChecked();
});

test("changes selection when a radio input is clicked", () => {
  const { getByLabelText } = renderWithRouter(<Carrusel />);

  const radioItem2 = getByLabelText("Ojos Moviles");
  fireEvent.click(radioItem2);

  // Verifica que ahora el input "item-2" esté marcado
  expect(radioItem2).toBeChecked();

  // Verifica que el input "item-1" ya no esté marcado
  const radioItem1 = getByLabelText("Brillantina Surtida");
  expect(radioItem1).not.toBeChecked();
});
