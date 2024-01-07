import { IProduct } from "@/types/types";
import { Link } from "react-router-dom";

type Props = {
  r: IProduct;
};

export default function RelatedItem({ r }: Props) {
  return (
    <Link
      to={`/produtos/${r.id}`}
      className="flex max-h-[200px] max-w-[250px]  flex-wrap items-center justify-center  p-4"
      key={r.id}
    >
      <img
        className=" max-h-full max-w-full object-contain"
        src={r.img}
        alt={r.img + "img"}
      />
      <strong>{r.text}</strong>
    </Link>
  );
}
