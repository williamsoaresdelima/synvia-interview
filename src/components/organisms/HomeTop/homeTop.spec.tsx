import React from "react";
import { render } from "@testing-library/react";

import HomeTop from ".";
import { getFilterMock } from "../../../mocks/product.mock";

describe("<HomeTop />", () => {
  const setFilters = () => {};
  const filters = getFilterMock();
  it("should be render correctly", () => {
    const { container } = render(
      <HomeTop setFilters={setFilters} filters={filters} />
    );
    expect(container).toBeInTheDocument();
  });
});
