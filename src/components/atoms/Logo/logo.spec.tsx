import React from "react";
import { render } from "@testing-library/react";

import Logo from ".";

describe("<Logo />", () => {
  it("should be render correctly", () => {
    const { container } = render(<Logo />);
    expect(container).toBeInTheDocument();
  });
});
