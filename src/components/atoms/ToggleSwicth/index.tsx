import React from "react";

import * as S from "./style";
import IToggleSwitch from "./IToggleSwicth.interface";

function ToggleSwicth({ active, setActive }: IToggleSwitch) {
  return (
    <S.Container
      data-testid="container"
      $active={active ? 1 : 0}
      onClick={() => setActive(!active)}
    ></S.Container>
  );
}

export default ToggleSwicth;
