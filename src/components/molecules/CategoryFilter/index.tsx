import React from "react";

import * as Atoms from "../../atoms/index.anchor";
import * as S from "./style";
import ICategoryFilter from "./ICategoryFilter.interface";
import { IProduct } from "../../../interface/products.interface";

function getCategories(allProducts: IProduct[]): string[] {
  const filtered = allProducts.map((item) => item.category).filter((x) => !!x);
  return Array.from(new Set(filtered));
}

function CategoryFilter({ filters, setFilters, allProducts }: ICategoryFilter) {
  const [categories, setCategories] = React.useState<string[]>([]);
  const [selectedCat, setSelectedCat] = React.useState<string>("");

  React.useEffect(() => {
    const categories = getCategories(allProducts);
    setCategories(categories);
  }, [setCategories, allProducts]);

  React.useEffect(() => {
    setFilters({ ...filters, category: selectedCat });
  }, [selectedCat]);

  const setCategorie = (value: string) => {
    selectedCat === value ? setSelectedCat("") : setSelectedCat(value);
  };
  return (
    <S.Container>
      <h3 className="subtitle">Filtrar por categoria</h3>
      <S.FilterBox>
        {categories.map((item, idx) => (
          <div
            data-testid="categories"
            key={idx}
            onClick={() => setCategorie(item)}
          >
            <Atoms.FilterCard
              name={item}
              active={item === selectedCat}
            ></Atoms.FilterCard>
          </div>
        ))}
      </S.FilterBox>
    </S.Container>
  );
}

export default CategoryFilter;
