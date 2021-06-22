import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import InputSearch from "./index";
import "@testing-library/jest-dom/";

it("El input esta siendo renderizado", () => {
  const { queryAllByPlaceholderText } = render(<InputSearch />);

  expect(queryAllByPlaceholderText("Buscar animes")).toBeTruthy();
});
