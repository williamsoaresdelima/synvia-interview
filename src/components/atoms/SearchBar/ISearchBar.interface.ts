import Filter from "../../../interface/filter.interface";

interface ISearchBar {
  setFilters: (value: Filter) => void;
  filters: Filter;
}

export default ISearchBar;
