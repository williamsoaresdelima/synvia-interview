import React from "react";

import * as S from "./style";
import ILayout from "./ILayout.interface";

function Layout({ children }: ILayout) {
  return (
    <S.Layout>
      <S.Container>{children}</S.Container>
    </S.Layout>
  );
}

export default Layout;
