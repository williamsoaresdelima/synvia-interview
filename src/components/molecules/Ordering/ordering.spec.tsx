import React from "react";
import { render } from "@testing-library/react";

import Ordering from ".";
import { getFilterMock } from "../../../mocks/product.mock";

describe("<Ordering />", () => {
  const setFilters = () => {};
  const filters = getFilterMock();
  it("should be render correctly", () => {
    const { container } = render(
      <Ordering setFilters={setFilters} filters={filters} />
    );

    expect(container).toBeInTheDocument();
  });
});
