import { CartItem } from "@/context/CartContext";
import { Trash } from "lucide-react";

type Props = {
  item: CartItem;
  onRemoveQuantity: (id: number) => void;
  onAddQuantity: (id: number) => void;
  onDeleteItem: (id: number) => void;
};

export default function ItemCart({
  item,
  onRemoveQuantity,
  onDeleteItem,
  onAddQuantity,
}: Props) {
  return (
    <li className="my-4 flex items-center justify-between border-b-2 border-t-2">
      <div className="flex">
        <img
          className="h-20 w-20 object-contain"
          src={item.img}
          alt={`${item.img}+ " img"`}
        />
        <div className=" flex flex-col p-4">
          <strong>{item.text}</strong>
          <h3>R$ {item.price}</h3>
        </div>
      </div>

      <div className="flex items-center">
        <div className="mr-2 flex items-center gap-1 md:gap-2">
          <button onClick={() => onRemoveQuantity(item.id)}>-</button>
          <strong className="text-sm">{item.quantity}</strong>
          <button onClick={() => onAddQuantity(item.id)}>+</button>
        </div>
        <strong className="text-sm">R${item.price * item.quantity}</strong>
        <Trash
          onClick={() => onDeleteItem(item.id)}
          className=" mx-2 cursor-pointer text-red-500 hover:scale-105 md:mx-4"
          size={18}
        />
      </div>
    </li>
  );
}
