import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Props = {
  onSelect: (value: string) => void;
};

export function RadioGroupDemo({ onSelect }: Props) {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="default"
          id="r1"
          onClick={(e) => onSelect((e.target as HTMLInputElement).value)}
        />
        <Label htmlFor="r1">Todos</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="Tv"
          id="r2"
          onClick={(e) => onSelect((e.target as HTMLInputElement).value)}
        />
        <Label htmlFor="r2">Tv</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="Ipad"
          id="r3"
          onClick={(e) => onSelect((e.target as HTMLInputElement).value)}
        />
        <Label htmlFor="r3">Ipads</Label>
      </div>

      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="acessorio"
          id="r4"
          onClick={(e) => onSelect((e.target as HTMLInputElement).value)}
        />
        <Label htmlFor="r4">Acessorios</Label>
      </div>

      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="notebook"
          id="r5"
          onClick={(e) => onSelect((e.target as HTMLInputElement).value)}
        />
        <Label htmlFor="r5">Notebook</Label>
      </div>

      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="celular"
          id="r6"
          onClick={(e) => onSelect((e.target as HTMLInputElement).value)}
        />
        <Label htmlFor="r6">Celular</Label>
      </div>
    </RadioGroup>
  );
}
