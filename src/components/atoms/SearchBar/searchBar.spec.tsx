import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import SearchBar from ".";
import Filter from "../../../interface/filter.interface";

describe("<SearchBar />", () => {
  const filters = {
    order: 1,
    search: "",
    category: "",
    favorite: false,
  };
  const setFilters = (value: Filter) => {};

  it("should be render correctly", () => {
    const { container } = render(
      <SearchBar setFilters={setFilters} filters={filters} />
    );

    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "a" } });
    fireEvent.keyDown(input, { code: "Enter" });

    const searchIcon = screen.getAllByTestId("icon");
    fireEvent.click(searchIcon[0]);

    expect(container).toBeInTheDocument();
  });
});
