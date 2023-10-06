import Filter from "../../../interface/filter.interface";
import { IProduct } from "../../../interface/products.interface";

interface ISideFilters {
  setFilters: (value: Filter) => void;
  filters: Filter;
  allProducts: IProduct[];
}

export default ISideFilters;
