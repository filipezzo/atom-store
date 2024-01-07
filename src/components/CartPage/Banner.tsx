import useNav from "@/hooks/useNav";
import { Button } from "../ui/button";

export default function Banner() {
  const handleClick = useNav();
  return (
    <section className=" container col-span-1 my-4 flex flex-col gap-4 rounded-md bg-zinc-400 p-16 md:col-span-2 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="strong text-3xl">Faltou Algo?</h2>
        <p className="text-xl">
          Aproveite e descubra mais produtos perfeitos para você
        </p>
      </div>
      <Button onClick={handleClick}>Continue Comprando</Button>
    </section>
  );
}
