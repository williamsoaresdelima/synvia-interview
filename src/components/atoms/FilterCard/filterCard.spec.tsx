import React from "react";
import { render } from "@testing-library/react";

import FilterCard from ".";

describe("<FilterCard />", () => {
  const name = "test";
  let active = false;
  it("should be render correctly", () => {
    const { container } = render(<FilterCard active={active} name={name} />);
    expect(container).toBeInTheDocument();
  });

  it("should be render correctly with active true", () => {
    active = true;
    const { container } = render(<FilterCard active={active} name={name} />);
    expect(container).toBeInTheDocument();
  });
});
