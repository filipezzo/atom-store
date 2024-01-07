import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useCategory } from "@/context/CategoryContext";

type Props = {
  title: string;
};

export default function ContentHeader({ title }: Props) {
  const nav = useNavigate();
  const { handleChange } = useCategory();

  const handleClick = () => {
    nav("/produtos");
    handleChange("default");
  };
  return (
    <header className="mb-8 flex items-center justify-between">
      <h2 className="text-2xl font-bold">{title}</h2>
      <Button onClick={handleClick}>Mostre Todos</Button>
    </header>
  );
}
