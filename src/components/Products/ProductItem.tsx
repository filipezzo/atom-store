import { IProduct } from "@/types/types";
import { Link } from "react-router-dom";

type Props = {
  product: IProduct;
};
export default function ProductItem({ product }: Props) {
  return (
    <div>
      <Link to={`/produtos/${product.id}`}>
        <div className="flex h-full max-h-[400px] cursor-pointer  flex-col rounded-md bg-zinc-500  p-4 text-center hover:scale-95 hover:opacity-90">
          <img
            className="max-h-[250px] object-contain p-4 "
            src={product.img}
            alt={product.text + "img"}
          />
        </div>
        <div className=" -mt-12 flex  items-center justify-between  p-4">
          <strong>{product.text}</strong>
          <h3 className="ml-8">R${product.price}</h3>
        </div>
      </Link>
    </div>
  );
}
