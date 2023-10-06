import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import FavoriteFilter from ".";
import { getFilterMock } from "../../../mocks/product.mock";

describe("<FavoriteFilter />", () => {
  const setFilters = () => {};
  const filters = getFilterMock();
  it("should be render correctly", () => {
    const { container } = render(
      <FavoriteFilter setFilters={setFilters} filters={filters} />
    );

    expect(container).toBeInTheDocument();
  });
});
