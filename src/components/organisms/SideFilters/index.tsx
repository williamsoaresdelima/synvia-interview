import React from "react";

import * as Molecules from "../../molecules/index.anchor";
import * as S from "./style";
import ISideFilters from "./ISideFilters.interface";

function SideFilters({ setFilters, filters, allProducts }: ISideFilters) {
  return (
    <S.Container>
      <Molecules.CategoryFilter
        allProducts={allProducts}
        setFilters={setFilters}
        filters={filters}
      />
      <Molecules.FavoriteFilter setFilters={setFilters} filters={filters} />
    </S.Container>
  );
}

export default SideFilters;
