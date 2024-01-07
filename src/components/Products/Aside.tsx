import { RadioGroupDemo } from "../RadioGroupDemo";

type Props = {
  onSelect: (value: string) => void;
};

export default function Aside({ onSelect }: Props) {
  return (
    <aside>
      <h2 className="mb-2 font-bold md:text-xl">Filtre por Categoria</h2>

      <RadioGroupDemo onSelect={onSelect} />
    </aside>
  );
}
