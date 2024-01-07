import { Button } from "@/components/ui/button";
import { IProduct } from "@/types/types";
import { useState } from "react";
import RelatedArea from "./RelatedArea";
import { CartItem, useCart } from "@/context/CartContext";

type Props = {
  item: IProduct;
  related: IProduct[];
};

export default function DetailsArea({ item, related }: Props) {
  const { handleAddItem } = useCart();
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const handleClick = (item: CartItem) => {
    handleAddItem(item);
    setIsBtnDisabled(true);
  };
  return (
    <section className="flex  flex-col gap-4  md:flex-row ">
      <div>
        <img className=" w-64 object-contain md:w-96" src={item.img} />
      </div>
      <section className="flex flex-1 flex-col gap-4 p-4">
        <h1 className="text-4xl font-bold">{item.text}</h1>
        <p>{item.category}</p>
        <strong>R$ {item.price}</strong>
        <p className="my-4">{item.desc}</p>
        <Button
          disabled={isBtnDisabled}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onClick={() => handleClick(item as any)}
        >
          {isBtnDisabled ? "Item Adicionado" : "Adicione No Carrinho"}
        </Button>
        <RelatedArea related={related} />
      </section>
    </section>
  );
}
