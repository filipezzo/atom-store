import { createContext, useContext, useState } from "react";

interface CategoryContextProps {
  selectedCategory: string;
  handleChange: (value?: string) => void;
}

const CategoryContext = createContext<CategoryContextProps | undefined>(
  undefined,
);

export const CategoryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("default");

  const handleChange = (value?: string) => {
    setSelectedCategory(value || "default");
  };

  return (
    <CategoryContext.Provider value={{ selectedCategory, handleChange }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = (): CategoryContextProps => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
};
