"use client";
import { useProducts } from "@/context/ProductContext";
import Input from "../ui/Input";

function SearchInput() {
  const { search, setSearch } = useProducts();
  return (
    <div>
      <Input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
