"use client";
import { useProducts } from "@/context/ProductContext";

export default function InStockFilter() {
  const { inStock, setInStock } = useProducts();
  return (
    <div>
      <label className="text-accent-900 dark:text-accent-700">
        <input
          className="form-checkbox dark:accent-amber-700 accent-amber-900"
          type="checkbox"
          checked={inStock}
          onChange={(e) => setInStock(e.target.checked)}
        />
        In Stock Only
      </label>
    </div>
  );
}
