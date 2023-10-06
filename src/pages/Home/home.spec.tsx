import React from "react";
import { render } from "@testing-library/react";
import Home from ".";
import { getProductMockArray } from "../../mocks/product.mock";

describe("<Home />", () => {
  it("should be render correctly", () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
  });
});
