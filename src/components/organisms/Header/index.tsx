import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import * as Atoms from "../../atoms/index.anchor";
import * as S from "./style";

function Header() {
  return (
    <S.Background>
      <S.ContainerBox>
        <S.Box>
          <Atoms.Logo />
          <FontAwesomeIcon icon={faUserCircle} />
        </S.Box>
      </S.ContainerBox>
    </S.Background>
  );
}

export default Header;
