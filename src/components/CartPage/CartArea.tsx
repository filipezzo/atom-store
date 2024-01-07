import { CartItem, useCart } from "@/context/CartContext";

import ItemCart from "./ItemCart";

type Props = {
  cartItem: CartItem[];
};

export default function CartArea({ cartItem }: Props) {
  const { handleDeleteItem, handleAddQuantity, handleRemoveQuantity } =
    useCart();

  return (
    <div className="max-h-[500px] flex-1 overflow-scroll ">
      <h2 className="text-3xl font-bold">Cart</h2>
      <div className="my-4 flex items-center justify-between">
        <h3>Produtos</h3>
        <h3>Quantidade</h3>
        <h3>Subtotal</h3>
      </div>
      <ul>
        {cartItem.length > 0 ? (
          cartItem.map((item) => (
            <ItemCart
              key={item.id}
              item={item}
              onDeleteItem={handleDeleteItem}
              onAddQuantity={handleAddQuantity}
              onRemoveQuantity={handleRemoveQuantity}
            />
          ))
        ) : (
          <h2 className="my-4 font-bold md:text-2xl xl:text-3xl">
            Carrinho Vazio 😐
          </h2>
        )}
      </ul>
    </div>
  );
}
