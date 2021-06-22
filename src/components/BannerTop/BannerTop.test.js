import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import BannerTop from "./index";
import "@testing-library/jest-dom/";

it("Esta siendo renderizado", () => {
  const { getByText } = render(<BannerTop />);

  expect(getByText("Top Anime")).toBeTruthy();
});
