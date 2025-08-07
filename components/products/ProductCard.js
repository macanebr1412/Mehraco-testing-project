import { formatCurrency } from "@/lib/helpers";
import Image from "next/image";
import Button from "../ui/Button";
import P from "../ui/P";

function ProductCard({ product }) {
  const { price, stock, brand, images, title } = product;
  const available = stock > 0;
  return (
    <li className="flex gap-4 py-2">
      <Image
        style={{
          width: "auto",
          height: "auto",
        }}
        priority
        src={images[0]}
        width={100}
        height={100}
        alt={title}
        className={`h-24 ${
          !available ? "dark:opacity-20 opacity:50 grayscale" : ""
        }`}
      />
      <div className="flex grow flex-col pt-0.5">
        <P
          className={`font-medium text-start ${
            !available ? "text-sm font-medium text-stone-500 uppercase" : ""
          }`}
        >
          {title}
        </P>
        <p
          className={`font-medium ${
            !available ? "text-sm font-medium text-stone-500 uppercase" : ""
          }`}
        >
          {brand}
        </p>

        <div className="mt-auto sm:flex  items-center justify-between ">
          {available ? (
            <p className="text-sm">{formatCurrency(price)}</p>
          ) : (
            <p className="text-sm font-medium text-stone-500 uppercase">
              -------------
            </p>
          )}

          {!available ? (
            <p className="text-sm font-medium text-stone-500 uppercase">
              unAvailable
            </p>
          ) : (
            <Button
              to={`${product.id}`}
              type="primary"
              className="w-full sm:w-max"
            >
              More Detail
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
