"use client";

import { useDebounce } from "@/hooks/useDebounce";
import { useSearchParams, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [brands, setBrands] = useState([]);
  const [inStock, setInStock] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 2000]);

  const debouncedSearch = useDebounce(search, 400);

  useEffect(
    function () {
      const currentPage = searchParams.get("page") || "1";
      if (currentPage !== "1") {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", "1");
        router.replace(`?${params.toString()}`);
      }
    },
    [debouncedSearch, brands, inStock, priceRange]
  );

  const value = useMemo(
    () => ({
      search,
      setSearch,
      brands,
      setBrands,
      inStock,
      setInStock,
      priceRange,
      setPriceRange,
      debouncedSearch,
    }),
    [search, brands, inStock, priceRange, debouncedSearch]
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined)
    throw new Error("Context was used outside Provider");
  return context;
}

export { ProductProvider, useProducts };
