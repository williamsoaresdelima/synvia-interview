import React from "react";

import * as S from "./style";
import IFilterCard from "./IFilterCard.interface";

function FilterCard({ name, active }: IFilterCard) {
  return (
    <S.Card $active={active ? 1 : 0}>
      <span className="emphasis-source">{name}</span>
    </S.Card>
  );
}

export default FilterCard;
