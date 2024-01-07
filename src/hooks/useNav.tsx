import { useCategory } from "@/context/CategoryContext";
import { useNavigate } from "react-router-dom";

const useNav = () => {
  const nav = useNavigate();
  const { handleChange } = useCategory();

  const handleClick = () => {
    nav("/produtos");
    handleChange("default");
  };

  return handleClick;
};

export default useNav;
