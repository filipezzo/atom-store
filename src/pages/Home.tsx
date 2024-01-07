import Categories from "@/components/Categories/Categories";
import Deals from "@/components/Deals/Deals";

import Hero from "@/components/Hero/Hero";
import NewCollections from "@/components/NewCollections/NewCollections";
import QualityCards from "@/components/QualityCards/QualityCards";
import { useFirebase } from "@/context/FirebaseContext";

export default function Home() {
  const { category } = useFirebase();

  return (
    <main>
      <Hero />
      <Categories categories={category} />
      <NewCollections />
      <Deals />
      <QualityCards />
    </main>
  );
}
