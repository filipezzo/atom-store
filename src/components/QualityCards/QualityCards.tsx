import QualityItem from "./QualityItem";
import { Box, CreditCard, DollarSign, Headphones } from "lucide-react";

const qualitys = [
  {
    id: 1,
    title: "Frete Grátis",
    text: "Frete gratís acima de 200R$",
    icon: <Box size={30} />,
  },

  {
    id: 2,
    title: "Cashback Garantido",
    text: "30 dias de garantia",
    icon: <DollarSign size={30} />,
  },

  {
    id: 3,
    title: "Suporte Online",
    text: "24 horas por dia, 7 dias por semana",
    icon: <Headphones size={30} />,
  },

  {
    id: 4,
    title: "Várias Formas de Pagamento",
    text: "Só não aceitamos fiado 😅",
    icon: <CreditCard size={30} />,
  },
];

export default function QualityCards() {
  return (
    <ul className="container my-12 flex flex-col gap-4   md:flex-row md:items-center  lg:my-20">
      {qualitys.map((quality) => (
        <QualityItem key={quality.id} quality={quality} />
      ))}
    </ul>
  );
}
