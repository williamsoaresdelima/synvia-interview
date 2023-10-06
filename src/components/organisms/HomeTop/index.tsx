import React from "react";

import * as S from "./style";
import * as Atoms from "../../atoms/index.anchor";
import * as Molecules from "../../molecules/index.anchor";
import IHomeTop from "./IHomeTop.interface";

function HomeTop({ setFilters, filters }: IHomeTop) {
  return (
    <S.Container>
      <Atoms.SearchBar setFilters={setFilters} filters={filters} />
      <Molecules.Ordering setFilters={setFilters} filters={filters} />
    </S.Container>
  );
}

export default HomeTop;
