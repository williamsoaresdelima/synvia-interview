import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import CardProduct from ".";
import { IProduct } from "../../../interface/products.interface";

describe("<CardProduct />", () => {
  const item = {
    api_featured_image: "url",
    favorite: true,
    id: 1,
    name: "test",
    price: "5",
    price_sign: "R$",
    category: "test",
  } as IProduct;

  it("should be render correctly", () => {
    const { container } = render(
      <CardProduct item={item as unknown as IProduct} />
    );

    const icon = screen.getAllByTestId("item");
    fireEvent.click(icon[0]);

    expect(container).toBeInTheDocument();
  });

  it("should be render correctly", () => {
    item.favorite = false;
    const { container } = render(
      <CardProduct item={item as unknown as IProduct} />
    );

    const favorite = screen.getAllByTestId("favorite");
    fireEvent.click(favorite[0]);

    expect(container).toBeInTheDocument();
  });
});
