import React from "react";

import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ISearchBar from "./ISearchBar.interface";

function SearchBar({ filters, setFilters }: ISearchBar) {
  const [search, setSearch] = React.useState("");

  const initSearch = () => {
    setFilters({ ...filters, search });
  };
  return (
    <S.Container>
      <S.SearchBar
        data-testid="input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Pesquisar por nome ou número"
        onKeyDown={(e) => e.code === "Enter" && initSearch()}
      />
      <FontAwesomeIcon
        data-testid="icon"
        icon={faSearch}
        style={{ color: "var(--color-purple-dark)" }}
        onClick={() => initSearch()}
      />
    </S.Container>
  );
}

export default SearchBar;
