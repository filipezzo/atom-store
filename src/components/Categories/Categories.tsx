import { ICategories } from "@/types/types";
import Card from "../Card";
import ContainerList from "../ContainerList";
import ContentHeader from "../ContentHeader";

type Props = {
  categories: ICategories[];
};

export default function Categories({ categories }: Props) {
  return (
    <section className="container mb-8 mt-16">
      <ContentHeader title="Compre por Categoria" />
      <ContainerList>
        {categories.map((category) => (
          <Card key={category.id} category={category} />
        ))}
      </ContainerList>
    </section>
  );
}
