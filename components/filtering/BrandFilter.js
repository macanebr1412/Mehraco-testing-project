"use client";

import { useProducts } from "@/context/ProductContext";
import { useState, useEffect, useRef } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

export default function BrandMultiSelect() {
  const { setBrands } = useProducts();

  const allBrands = [
    "Essence",
    "Glamour Beauty",
    "Velvet Touch",
    "Chic Cosmetics",
    "Nail Couture",
    "Calvin Klein",
    "Chanel",
    "Dior",
    "Dolce & Gabbana",
    "Gucci",
    "Annibale Colombo",
    "Furniture Co.",
    "Knoll",
    "Bath Trends",
  ];

  // Ye seri local state hastan vase ui.
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const wrapperRef = useRef(null);

  //  Intori vaghti biroon click konim baste mishe dropdown ma
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleBrand = (brand) => {
    setBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );

    // Brandhaye select shode ham neshoon midim.
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div>
      <div
        className="outline-none border-0 relative w-full max-w-sm dark:text-accent-600 dark:bg-accent-100 bg-accent-950 text-accent-100"
        ref={wrapperRef}
      >
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full flex justify-between items-center px-4 py-2 dark:bg-accent-100 bg-accent-950 border rounded shadow-sm text-sm"
        >
          <div className="flex flex-wrap gap-1 max-w-[75%]">
            {selectedBrands.length > 0 ? (
              selectedBrands.map((brand) => (
                <span
                  key={brand}
                  className=" text-accent-200 dark:text-accent-700 px-2 py-0.5 rounded-full text-xs border border-accent-200"
                >
                  {brand}
                </span>
              ))
            ) : (
              <span className="text-accent-600 "> Choose Brands</span>
            )}
          </div>
          <span className="text-gray-500 text-xs ml-2">
            {isOpen ? <HiChevronUp /> : <HiChevronDown />}
          </span>
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-1 w-full max-h-60 overflow-auto dark:bg-accent-100 bg-accent-950 border rounded shadow-lg p-2 scrollbar">
            <ul className="space-y-1">
              {allBrands.map((brand) => (
                <li key={brand}>
                  <label className="flex items-center gap-2 px-2 py-1 hover:bg-accent-600 dark:hover:bg-accent-200 rounded cursor-pointer text-sm">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="form-checkbox  dark:accent-amber-800 accent-amber-300"
                    />
                    <span>{brand}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
