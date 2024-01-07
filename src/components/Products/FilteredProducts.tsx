import { IProduct } from "@/types/types";
import ProductItem from "./ProductItem";

type Props = {
  filteredProducts: IProduct[];
};

export default function FilteredProducts({ filteredProducts }: Props) {
  return (
    <main className=" flex flex-col gap-4 overflow-y-auto p-4 md:grid  md:grid-cols-2 lg:grid-cols-3">
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </main>
  );
}
