import Filter from "../../../interface/filter.interface";
import { IProduct } from "../../../interface/products.interface";

interface ICategoryFilter {
  setFilters: (value: Filter) => void;
  filters: Filter;
  allProducts: IProduct[];
}

export default ICategoryFilter;
