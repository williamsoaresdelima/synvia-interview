import React from "react";
import { render } from "@testing-library/react";
import Layout from ".";

describe("<Layout />", () => {
  const element = <span />;
  it("should be render correctly", () => {
    const { container } = render(<Layout children={element} />);
    expect(container).toBeInTheDocument();
  });
});
