import FilterWrapper from "@/components/filtering/FilterWrapper";
import TitleOfProducts from "@/components/products/TitleOfProducts";
import Spinner from "@/components/spinner/Spinner";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const ProductList = dynamic(() => import("@/components/products/ProductList"));

// Chonke route be vaseteye searchParams dynamic hast pas niazi be revalidate nis
// export const revalidate = X;

function Page({ searchParams }) {
  const curPage = searchParams?.page ?? "1";
  return (
    <div>
      <TitleOfProducts />
      <FilterWrapper />
      <Suspense fallback={<Spinner />}>
        <ProductList curPage={curPage} />
      </Suspense>
    </div>
  );
}

export default Page;
