import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("<App />", () => {
  render(<App />);
  const container = screen.getAllByTestId("container");
  expect(container[0]).toBeInTheDocument();
});
