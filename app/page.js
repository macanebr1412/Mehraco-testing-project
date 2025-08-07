import FilterWrapper from "@/components/filtering/FilterWrapper";
import TitleOfProducts from "@/components/products/TitleOfProducts";
import dynamic from "next/dynamic";

const ProductList = dynamic(() => import("@/components/products/ProductList"));

// Chonke route be vaseteye searchParams dynamic hast pas niazi be revalidate nis
// export const revalidate = X;

function Page({ searchParams }) {
  const curPage = searchParams?.page ?? "1";
  return (
    <div>
      <TitleOfProducts />
      <FilterWrapper />
      <ProductList curPage={curPage} />
    </div>
  );
}

export default Page;
