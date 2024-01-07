import CarouselC from "./CarouselC";

export default function NewCollections() {
  return (
    <section className="container mb-8 mt-16 ">
      <h2 className=" my-8 text-center font-bold md:text-xl xl:text-2xl">
        Adicionados Recentemente
      </h2>
      <CarouselC />
    </section>
  );
}
