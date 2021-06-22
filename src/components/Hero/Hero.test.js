import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Hero from "./index";
import "@testing-library/jest-dom/";

it("La imagen esta siendo renderizada", () => {
  const { getByAltText } = render(<Hero />);

  expect(getByAltText("Imagen de fondo")).toBeTruthy();
});

it("Esta siendo renderizado", () => {
  const { getByText } = render(<Hero />);

  expect(getByText("Bienvenidos a la pagina")).toBeTruthy();
});
