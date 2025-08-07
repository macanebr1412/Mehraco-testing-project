"use client";
import { useQuery } from "@tanstack/react-query";
import { useProducts } from "@/context/ProductContext";

// Kole product ro migirim va roosh filter ha ro emal mikonim , filtera hamzaman ba ham kar mikone.

async function fetchProducts(search) {
  let url = "https://dummyjson.com/products";
  if (search) {
    url = `https://dummyjson.com/products/search?q=${encodeURIComponent(
      search
    )}`;
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error("Network error");
  const data = await res.json();
  return data.products || [];
}

export default function useFilteredProductsQuery() {
  const { debouncedSearch, brands, inStock, priceRange } = useProducts();

  return useQuery({
    queryKey: ["products", debouncedSearch],

    queryFn: () => fetchProducts(debouncedSearch),

    staleTime: 30 * 1000,

    select: (products) =>
      products.filter((p) => {
        const matchBrand = brands.length ? brands.includes(p.brand) : true;

        const matchStock = inStock ? p.stock > 0 : true;

        const matchPrice =
          priceRange.length === 2
            ? p.price >= priceRange[0] && p.price <= priceRange[1]
            : true;

        return matchBrand && matchStock && matchPrice;
      }),
  });
}
