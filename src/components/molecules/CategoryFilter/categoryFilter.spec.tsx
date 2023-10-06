import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import CategoryFilter from ".";
import {
  getFilterMock,
  getProductMockArray,
} from "../../../mocks/product.mock";

describe("<CategoryFilter />", () => {
  const setFilters = () => {};
  const filters = getFilterMock();
  const allProducts = getProductMockArray();

  it("should be render correctly", () => {
    const { container } = render(
      <CategoryFilter
        setFilters={setFilters}
        filters={filters}
        allProducts={allProducts as any}
      />
    );

    const categories = screen.getAllByTestId("categories");
    fireEvent.click(categories[0]);

    expect(container).toBeInTheDocument();
  });
});
