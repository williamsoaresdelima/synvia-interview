import Filter from "../../../interface/filter.interface";

interface IComboBox {
  setFilters: (value: Filter) => void;
  filters: Filter;
}

export default IComboBox;
