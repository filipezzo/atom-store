import DealsHero from "./DealsHero";
import DealsContent from "./DealsContent";

export default function Deals() {
  return (
    <section className="container my-16 grid max-h-[500px] grid-cols-1  overflow-hidden rounded-md md:grid-cols-2 md:gap-8">
      <DealsContent />
      <DealsHero />
    </section>
  );
}
