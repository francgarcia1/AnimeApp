import React from "react";
import { render } from "@testing-library/react";
import Footer from "./index";
import "@testing-library/jest-dom/";

it("Esta siendo renderizado", () => {
  const { getByText } = render(<Footer />);

  expect(getByText("Unete a la Comunidad")).toBeTruthy();
});
