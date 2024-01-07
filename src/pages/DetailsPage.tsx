import DetailsArea from "@/Details/DetailsArea";
import { useFirebase } from "@/context/FirebaseContext";
import useScrollToTop from "@/hooks/useScrollToTop";
import { useParams } from "react-router-dom";

export default function DetailsPage() {
  const { id } = useParams();
  const idNumber = Number(id);
  const { products } = useFirebase();
  useScrollToTop();

  const filterById = products.filter((product) => product.id === idNumber);

  const currentCategory = filterById.length > 0 ? filterById[0].category : null;

  const relatedProduct = products.filter(
    (product) =>
      product.id !== idNumber && product.category === currentCategory,
  );

  return (
    <main className="container   p-4 md:h-[747px]">
      {filterById.map((item) => (
        <>
          <DetailsArea key={item.id} item={item} related={relatedProduct} />
        </>
      ))}
    </main>
  );
}
