import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ToggleSwicth from ".";

describe("<ToggleSwicth />", () => {
  it("should be render correctly", () => {
    const active = false;
    const setActive = (value: boolean) => {};
    const { container } = render(
      <ToggleSwicth setActive={setActive} active={active} />
    );
    const favoriteContainer = screen.getAllByTestId("container");
    fireEvent.click(favoriteContainer[0]);
    expect(container).toBeInTheDocument();
  });

  it("should be render correctly with active true", () => {
    const active = true;
    const setActive = (value: boolean) => {};
    const { container } = render(
      <ToggleSwicth setActive={setActive} active={active} />
    );
    const favoriteContainer = screen.getAllByTestId("container");
    fireEvent.click(favoriteContainer[0]);
    expect(container).toBeInTheDocument();
  });
});
