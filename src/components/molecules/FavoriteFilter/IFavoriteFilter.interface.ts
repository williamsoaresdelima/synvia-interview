import Filter from "../../../interface/filter.interface";

interface IFavoriteFilter {
  setFilters: (value: Filter) => void;
  filters: Filter;
}

export default IFavoriteFilter;
