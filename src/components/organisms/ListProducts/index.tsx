import React from "react";

import * as S from "./style";
import * as Molecules from "../../molecules/index.anchor";
import { IProduct } from "../../../interface/products.interface";
import IListProducts from "./IListProducts.interface";

function ListProducts({ products }: IListProducts) {
  return (
    <S.ContainerBox>
      {products && (
        <S.Container>
          {products.map((item: IProduct, idx: number) => (
            <Molecules.CardProduct key={idx} item={item} />
          ))}
        </S.Container>
      )}
    </S.ContainerBox>
  );
}

export default ListProducts;
