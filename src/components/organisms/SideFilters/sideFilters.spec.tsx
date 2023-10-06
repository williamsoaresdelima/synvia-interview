import React from "react";
import { render } from "@testing-library/react";

import SideFilters from ".";
import {
  getFilterMock,
  getProductMockArray,
} from "../../../mocks/product.mock";

describe("<SideFilters />", () => {
  const setFilters = () => {};
  const filters = getFilterMock();
  const allProducts = getProductMockArray();

  it("should be render correctly", () => {
    const { container } = render(
      <SideFilters
        allProducts={allProducts as any}
        filters={filters}
        setFilters={setFilters}
      />
    );
    expect(container).toBeInTheDocument();
  });
});
