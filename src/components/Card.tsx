import { ICategories } from "@/types/types";
import { Button } from "./ui/button";
import { useCategory } from "@/context/CategoryContext";
import { useNavigate } from "react-router-dom";

type Props = {
  category: ICategories;
};

export default function Card({ category }: Props) {
  const { handleChange } = useCategory();
  const nav = useNavigate();
  const handleClick = (category: string) => {
    handleChange(category);
    nav("/produtos");
  };
  return (
    <div
      onClick={() => handleClick(category.category)}
      className=" flex h-full max-h-[400px]  cursor-pointer flex-col rounded-md  bg-zinc-500 p-4 text-center hover:scale-95 hover:opacity-90"
    >
      <img
        className="h-[300px]   object-cover"
        src={category.img}
        alt={category.text + "img"}
      />
      <Button className="w-full hover:scale-105">{category.text}</Button>
    </div>
  );
}
