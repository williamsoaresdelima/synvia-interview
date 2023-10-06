import React from "react";
import { render } from "@testing-library/react";
import NotFound from ".";

describe("<NotFound />", () => {
  it("should be render correctly", () => {
    const { container } = render(<NotFound />);
    expect(container).toBeInTheDocument();
  });
});
