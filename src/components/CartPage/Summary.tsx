import { ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import { useFirebase } from "@/context/FirebaseContext";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";

type Props = {
  total: number;
};

export default function Summary({ total }: Props) {
  const { user } = useFirebase();
  const { handleReset } = useCart();
  const nav = useNavigate();
  const handleClick = () => {
    nav("/confirmado");
    handleReset();
  };

  return (
    <section className="flex h-[459px] w-full max-w-[450px] flex-col justify-between gap-4 rounded-md border p-4">
      <h2 className=" flex items-center justify-between border-b-2">
        <span>Resumo</span>
        {user && user.displayName ? (
          <strong>Olá, {user.displayName}</strong>
        ) : (
          <strong>Olá, visitante</strong>
        )}
      </h2>
      <ShoppingBag className="mx-auto max-w-40" />
      <div className="flex flex-col gap-4">
        <strong className="flex items-center justify-between">
          Total
          <p>R$ {total.toFixed(2)}</p>
        </strong>
        <Button onClick={handleClick}>Confirmar Pedido 🤩</Button>
      </div>
    </section>
  );
}
