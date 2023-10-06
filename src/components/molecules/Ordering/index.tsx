import React from "react";

import * as S from "./style";
import * as Atoms from "../../atoms/index.anchor";
import IOrdering from "./IOrdering.interface";

function Ordering({ filters, setFilters }: IOrdering) {
  return (
    <S.Container>
      <h2 className="subtitle">Ordenar por</h2>
      <Atoms.ComboBox setFilters={setFilters} filters={filters} />
    </S.Container>
  );
}

export default Ordering;
