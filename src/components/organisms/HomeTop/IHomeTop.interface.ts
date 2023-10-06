import Filter from "../../../interface/filter.interface";
import { IProduct } from "../../../interface/products.interface";

interface IHomeTop {
  setFilters: (value: Filter) => void;
  filters: Filter;
}

export default IHomeTop;
