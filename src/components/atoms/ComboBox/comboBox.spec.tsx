import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ComboBox from ".";
import Filter from "../../../interface/filter.interface";

describe("<ComboBox />", () => {
  const filters = {
    order: 1,
    search: "",
    category: "",
    favorite: false,
  };
  const setFilters = (value: Filter) => {};

  it("should be render correctly", () => {
    const { container } = render(
      <ComboBox setFilters={setFilters} filters={filters} />
    );

    const menu = screen.getAllByTestId("button");
    fireEvent.click(menu[0]);

    const item = screen.getAllByTestId("item");
    fireEvent.click(item[1]);

    expect(container).toBeInTheDocument();
  });
});
