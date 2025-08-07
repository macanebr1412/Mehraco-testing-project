import BrandFilter from "./BrandFilter";
import InStockFilter from "./InStockFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import SearchInput from "./SearchInput";

function FilterWrapper() {
  return (
    <div className="mb-2">
      <div className="grid grid-cols-1 items-center gap-10  sm:grid-cols-2 lg:grid-cols-3 mb-2">
        <SearchInput />
        <BrandFilter />
        <PriceRangeFilter />
      </div>
      <InStockFilter />
    </div>
  );
}

export default FilterWrapper;
