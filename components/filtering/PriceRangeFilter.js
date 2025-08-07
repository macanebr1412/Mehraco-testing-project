"use client";

import { useState, useEffect } from "react";
import { useProducts } from "@/context/ProductContext";
import Input from "../ui/Input";

export default function PriceRangeFilter() {
  // Ye seri local state vase logic min va max price!
  const { priceRange, setPriceRange } = useProducts();
  const [min, setMin] = useState(priceRange[0]);
  const [max, setMax] = useState(priceRange[1]);
  const [error, setError] = useState("");
  const isValidNumber = (val) => !isNaN(val) && val !== "" && val !== null;

  useEffect(() => {
    if (!isValidNumber(min) || !isValidNumber(max)) {
      setError("");
      return;
    }

    if (Number(max) <= 0) {
      setError("Max price must be greater than 0");
    } else if (Number(min) > Number(max)) {
      setError("Min price must be less than max price!!");
    } else {
      setError("");
      setPriceRange([Number(min), Number(max)]);
    }
  }, [min, max, setPriceRange]);

  const minChangeHandler = function (e) {
    {
      let value = e.target.value;
      value = value.replace(/[^\d]/g, "");
      if (value.length > 1 && value.startsWith("0")) {
        value = value.replace(/^0+/, "");
      }

      if (value === "0") {
        value = "";
      }

      if (Number(value) > max) {
        return;
      }

      setMin(value);
    }
  };

  const maxChangeHandler = function (e) {
    {
      let value = e.target.value;
      value = value.replace(/[^\d]/g, "");

      if (value.length > 1 && value.startsWith("0")) {
        value = value.replace(/^0+/, "");
      }

      if (value === "0") {
        value = "";
      }

      if (Number(value) < min) {
        return;
      }

      setMax(value);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <label className="px-3">min price:</label>
          <Input type="number" value={min} onChange={minChangeHandler} />
        </div>
        <div className="flex flex-col">
          <label className="px-3">max price:</label>
          <Input type="number" value={max} onChange={maxChangeHandler} />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}
