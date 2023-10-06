import React from "react";
import { render } from "@testing-library/react";

import Header from ".";

describe("<Header />", () => {
  it("should be render correctly", () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });
});
