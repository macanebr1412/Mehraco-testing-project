"use client";
import { Suspense } from "react";
import PaginationButton from "./PaginationButton";
import Spinner from "../spinner/Spinner";
// Baraye har page hadeaksar 4 adad product.
export const PRODUCT_PER_PAGE = 4;

function PaginationWrapper({ products, curPage }) {
  const numOfProducts = products.length;
  const numOfPages = Math.ceil(numOfProducts / PRODUCT_PER_PAGE);
  return (
    <div className="flex gap-2 justify-center mt-4">
      {/* Ye arraye misazim ke map konim roosh vase list doros konim. */}
      {Array.from({ length: numOfPages }, (_, index) => index + 1).map(
        (num) => (
          <Suspense key={num} fallback={<Spinner />}>
            <PaginationButton
              num={num}
              curPage={Number(curPage)}
              numOfPages={numOfPages}
            />
          </Suspense>
        )
      )}
    </div>
  );
}

export default PaginationWrapper;
