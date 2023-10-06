import React from "react";
import { render } from "@testing-library/react";
import Loading from ".";

describe("<Loading />", () => {
  it("should be render correctly", () => {
    const { container } = render(<Loading />);
    expect(container).toBeInTheDocument();
  });
});
