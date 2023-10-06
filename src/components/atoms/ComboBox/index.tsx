import React from "react";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as S from "./style";
import IComboBox from "./IComboBox.interface";

function ComboBox({ filters, setFilters }: IComboBox) {
  const [active, setActive] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<string | undefined>(
    "Menor número primeiro"
  );
  const options = [
    { order: 1, option: "Menor número primeiro" },
    { order: 2, option: "Maior número primeiro" },
    { order: 3, option: "Maior preço primeiro" },
    { order: 4, option: "Menor preço primeiro" },
  ];

  function changeOption(order: number): void {
    if (filters.order !== order) {
      setFilters({ ...filters, order });
      const option = options.find((x) => x.order === order)?.option;
      setSelected(option);
    }
    setActive(false);
  }

  return (
    <S.Container>
      <S.Button
        $active={active ? 1 : 0}
        onClick={() => setActive(!active)}
        data-testid="button"
      >
        <h2 className="emphasis-source">{selected}</h2>
        <FontAwesomeIcon
          icon={active ? faSortUp : faSortDown}
          style={{ color: "var(--color-purple-dark)" }}
        />
      </S.Button>
      <S.Dropdown $active={active ? 1 : 0}>
        {options.map((x) => (
          <S.DropdownItem
            data-testid="item"
            onClick={() => changeOption(x.order)}
            $active={filters.order === x.order ? 1 : 0}
            className="emphasis-source"
            key={x.order}
          >
            {x.option}
          </S.DropdownItem>
        ))}
      </S.Dropdown>
    </S.Container>
  );
}

export default ComboBox;
