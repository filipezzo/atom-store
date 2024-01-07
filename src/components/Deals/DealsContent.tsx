import { Button } from "../ui/button";

import useNav from "@/hooks/useNav";

export default function DealsContent() {
  const handleClick = useNav();
  return (
    <div className="flex flex-col justify-between gap-4">
      <h2 className="font-bold md:text-2xl">Ofertas do Mês</h2>
      <p className="md:text-xl">
        Se prepare para a melhores ofertas do Mês.
        <br></br> Toda oferta vem com condições especiais. Não perca essa
        oportunidade
      </p>
      <Button onClick={handleClick} className="mb-4">
        Confira os Produtos
      </Button>
    </div>
  );
}
