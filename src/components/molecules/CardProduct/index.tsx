import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as S from "./style";
import ICardProduct from "./ICardProduct.interface";
import star from "../../../assets/icons/star-icon.svg";

function CardProduct({ item }: ICardProduct) {
  const [favorite, setFavorite] = React.useState(false);

  const changeFavorite = (value: boolean): void => {
    item.favorite = value;
    setFavorite(value);
  };

  React.useEffect(
    () => setFavorite(item.favorite),
    [setFavorite, item.favorite]
  );
  return (
    <S.Container>
      <img src={item.api_featured_image} alt="" />
      <S.HeaderContent>
        <span className="info">Nº {item.id}</span>
        {favorite ? (
          <FontAwesomeIcon
            data-testid="item"
            onClick={() => changeFavorite(false)}
            icon={faStar}
            style={{ color: "var(--color-green-medium)" }}
          />
        ) : (
          <img
            src={star}
            alt=""
            data-testid="favorite"
            onClick={() => changeFavorite(true)}
          />
        )}
      </S.HeaderContent>
      <h3 className="subtitle">{item.name}</h3>
      <h3 className="subtitle">
        {item.price_sign} {item.price}
      </h3>
      {item.category && (
        <S.Category className="white-font">{item.category}</S.Category>
      )}
    </S.Container>
  );
}

export default CardProduct;
