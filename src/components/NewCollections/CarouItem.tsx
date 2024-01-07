import { Link } from "react-router-dom";
import { CarouselItem } from "../ui/carousel";
import { IProduct } from "@/types/types";

type Props = {
  product: IProduct;
};

export default function CaroulItem({ product }: Props) {
  return (
    <CarouselItem className="cursor-grab select-none md:basis-1/2 lg:basis-1/3 ">
      <Link to={`/produtos/${product.id}`}>
        <img
          src={product.img}
          className="h-[300px] w-[420px] rounded-md bg-zinc-500 object-contain p-4"
        />
        <strong>{product.text}</strong>
      </Link>
    </CarouselItem>
  );
}
