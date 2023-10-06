import React from "react";
import { render } from "@testing-library/react";

import ListProducts from ".";
import { getProductMockArray } from "../../../mocks/product.mock";

describe("<ListProducts />", () => {
  const products = getProductMockArray();

  it("should be render correctly", () => {
    const { container } = render(<ListProducts products={products as any} />);
    expect(container).toBeInTheDocument();
  });
});
