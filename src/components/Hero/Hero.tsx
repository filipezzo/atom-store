import useNav from "@/hooks/useNav";
import hero from "../../assets/hero-1.png";
import { Button } from "../ui/button";

export default function Hero() {
  const handleClick = useNav();
  return (
    <section className="relative mx-auto   my-4 max-w-[90%]  cursor-pointer rounded-md bg-zinc-600 transition-all  md:container hover:scale-95  hover:opacity-90">
      <img src={hero} alt="banner img" />
      <section className=" absolute  hidden p-4 md:left-4 md:top-16 md:block  xl:left-24 xl:top-24 2xl:left-32 2xl:top-32  ">
        <h2 className=" mb-4  w-full   font-bold md:max-w-96 md:text-3xl lg:text-5xl xl:max-w-lg   ">
          Desperte a Inovação em Cada Byte.
        </h2>
        <p className="md:my-4 xl:text-xl ">
          Explore um Mundo de Tecnologia de Ponta.
        </p>
        <Button onClick={handleClick}>Compre Agora</Button>
      </section>
    </section>
  );
}
