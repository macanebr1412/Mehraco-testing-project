import { notFound } from "next/navigation";

// Gerefane kole itemha ke dar static kardane modal estefade shode.
export const getAllItems = async function () {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) throw new Error("Sorry! Fetching data is not completed");
  const { products } = await res.json();
  return products;
};

// Gerefane tak product be vasile id.
export const getItem = async function (id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();
  if (!product?.id) {
    // Too in app ma niazi nis chon man bekhatere inke serfan app test hast faghat modal ro neshoon midam va dar soorate reload kardan redirect('/') etefaggh miofte.
    notFound();
  }
  return product;
};
