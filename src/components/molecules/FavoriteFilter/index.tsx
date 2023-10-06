import React from "react";

import * as Atoms from "../../atoms/index.anchor";
import * as S from "./style";
import IFavoriteFilter from "./IFavoriteFilter.interface";

function FavoriteFilter({ setFilters, filters }: IFavoriteFilter) {
  const [favoriteFilter, setFavoriteFilter] = React.useState<boolean>(false);

  React.useEffect(() => {
    setFilters({ ...filters, favorite: favoriteFilter });
  }, [favoriteFilter]);

  return (
    <S.Container>
      <h3 className="subtitle">Filtrar por favorito</h3>
      <Atoms.ToggleSwicth
        active={favoriteFilter}
        setActive={setFavoriteFilter}
      ></Atoms.ToggleSwicth>
    </S.Container>
  );
}

export default FavoriteFilter;
