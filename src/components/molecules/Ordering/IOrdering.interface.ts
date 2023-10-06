import Filter from "../../../interface/filter.interface";

interface IOrdering {
  setFilters: (value: Filter) => void;
  filters: Filter;
}

export default IOrdering;
