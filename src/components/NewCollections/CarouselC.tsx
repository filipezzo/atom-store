import { CarouselContent, Carousel } from "../ui/carousel";

import CaroulItem from "./CarouItem";
import { useFirebase } from "@/context/FirebaseContext";

export default function CarouselC() {
  const { products } = useFirebase();
  return (
    <>
      <Carousel className="container ">
        <CarouselContent>
          {products.map((product) => (
            <CaroulItem key={product.id} product={product} />
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
