import Aside from "@/components/Products/Aside";
import FilteredProducts from "@/components/Products/FilteredProducts";
import { useCategory } from "@/context/CategoryContext";
import { useFirebase } from "@/context/FirebaseContext";
import useScrollToTop from "@/hooks/useScrollToTop";

export default function Products() {
  const { products } = useFirebase();
  useScrollToTop();

  const { selectedCategory, handleChange } = useCategory();

  const filteredProducts =
    selectedCategory === "default"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="container mb-8 mt-12 flex h-full flex-col   lg:grid lg:grid-cols-[300px_1fr] ">
      <Aside onSelect={handleChange} />
      <FilteredProducts filteredProducts={filteredProducts} />
    </div>
  );
}
