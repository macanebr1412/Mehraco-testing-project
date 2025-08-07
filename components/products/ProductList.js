"use client";

import PaginationWrapper, {
  PRODUCT_PER_PAGE,
} from "../pagination/PaginationWrapper";
import ProductCard from "./ProductCard";
import useFilteredProductsQuery from "@/hooks/useFilteredProductQuery";
import Spinner from "../spinner/Spinner";
import Error from "../ui/Error";

function ProductList({ curPage }) {
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useFilteredProductsQuery();
  if (isLoading) return <Spinner />;
  if (isError) return <Error error={error} />;

  // Taghsime be tedade page.
  const showProducts = products.slice(
    (curPage - 1) * PRODUCT_PER_PAGE,
    curPage * PRODUCT_PER_PAGE
  );

  if (!products.length)
    return (
      <div className="flex justify-center">
        <span className="text-red-600">Ooops! No Product Found!</span>
      </div>
    );
  return (
    <div>
      <ul className="divide-y divide-accent-800 dark:divide-accent-200 px-2">
        {showProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ul>
      <PaginationWrapper products={products} curPage={curPage} />
    </div>
  );
}

export default ProductList;
