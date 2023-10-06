import React from "react";
import axios from "axios";

import * as S from "./styled";
import * as Organisms from "../../components/organisms/index.anchor";
import * as Atoms from "../../components/atoms/index.anchor";
import Filter from "../../interface/filter.interface";
import { IProduct } from "../../interface/products.interface";

function Home() {
  const [products, setProducts] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [allProducts, setAllProducts] = React.useState<any>([]);
  const [filters, setFilters] = React.useState<Filter>({
    order: 1,
    search: "",
    category: "",
    favorite: false,
  });

  React.useEffect(() => {
    searchProducts(setProducts, setAllProducts, setLoading, filters);
  }, []);

  React.useEffect(() => {
    setProducts(filterProducts(allProducts, filters));
  }, [filters]);
  return (
    <>
      {loading ? <Atoms.Loading /> : ""}
      <S.Container>
        <Organisms.HomeTop
          setFilters={setFilters}
          filters={filters}
        ></Organisms.HomeTop>
        <S.Content>
          <Organisms.SideFilters
            allProducts={allProducts}
            setFilters={setFilters}
            filters={filters}
          ></Organisms.SideFilters>
          <Organisms.ListProducts products={products}></Organisms.ListProducts>
        </S.Content>
      </S.Container>
    </>
  );
}

export default Home;

async function searchProducts(
  setState: (value: any) => void,
  setAllState: (value: any) => void,
  setLoading: (value: any) => void,
  filters: Filter
): Promise<void> {
  const data = await axios.get(
    "https://makeup-api.herokuapp.com/api/v1/products.json"
  );
  data.data.forEach((x: any) => (x.favorite = false));
  setAllState(data.data as IProduct[]);
  setState(filterProducts(data.data as IProduct[], filters));
  setLoading(false);
}

const filterProducts = (
  allProducts: IProduct[],
  filters: Filter
): IProduct[] => {
  let filtered: IProduct[] = allProducts;

  if (filters.category) {
    filtered = filtered.filter((x) => x.category === filters.category);
  }
  if (filters.favorite) {
    filtered = filtered.filter((x) => x.favorite);
  }
  if (filters.search) {
    if (isNaN(+filters.search)) {
      filtered = filtered.filter((x) => {
        return (
          x.name
            .toLocaleUpperCase()
            .indexOf(filters.search.toLocaleUpperCase()) !== -1
        );
      });
    } else {
      filtered = filtered.filter((x) => {
        return x.id === +filters.search;
      });
    }
  }

  if (filters.order === 1) {
    filtered = filtered
      .sort(function (a, b) {
        return a.id - b.id;
      })
      .map((x) => x);
  } else if (filters.order === 2) {
    filtered = filtered
      .sort(function (a, b) {
        return b.id - a.id;
      })
      .map((x) => x);
  } else if (filters.order === 3) {
    filtered = filtered
      .sort(function (a, b) {
        return +b.price - +a.price;
      })
      .map((x) => x);
  } else {
    filtered = filtered
      .sort(function (a, b) {
        return +a.price - +b.price;
      })
      .map((x) => x);
  }

  return filtered;
};
