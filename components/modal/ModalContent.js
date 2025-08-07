import { formatCurrency } from "@/lib/helpers";
import Image from "next/image";

function ModalContent({ product }) {
  const { title, description, category, price, rating, images, brand } =
    product;
  const image = images[0];
  return (
    <div className="p-3 flex flex-col gap-4">
      <div className="flex flex-col items-center">
        <div className="relative aspect-square w-1/3 md:w-1/4">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <h2 className="dark:text-accent-200  sm:text-xl md:text-2xl">
          {title.toUpperCase()}
        </h2>
      </div>
      <p>{description}</p>
      <div className="flex flex-col sm:flex-row sm:justify-around sm:items-center">
        <div className="flex flex-col sm:gap-2">
          <p>
            <span className="dark:text-accent-200 text-accent-950">
              Price :{" "}
            </span>
            {formatCurrency(price)}
          </p>
          <p>
            <span className="dark:text-accent-200 text-accent-950">
              Brand :{" "}
            </span>
            {brand ? brand : "--------"}
          </p>
        </div>
        <div className="flex flex-col sm:gap-2">
          <p>
            <span className="dark:text-accent-200 text-accent-950">
              Category :{" "}
            </span>
            {category}
          </p>
          <p>
            <span className="dark:text-accent-200 text-accent-950">
              rating :{" "}
            </span>
            {rating}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ModalContent;
