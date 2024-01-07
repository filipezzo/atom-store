import Banner from "@/components/CartPage/Banner";
import CartArea from "@/components/CartPage/CartArea";
import Summary from "@/components/CartPage/Summary";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cartItem } = useCart();

  const total = cartItem
    .map((item) => item.price * item.quantity)
    .reduce((acc: number, total: number) => acc + total, 0);

  return (
    <section className="container my-4 grid grid-cols-1 md:gap-8 lg:grid-cols-[1fr_450px]">
      <CartArea cartItem={cartItem} />
      <Summary total={total} />
      <Banner />
    </section>
  );
}
