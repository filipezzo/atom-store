import { IProduct } from "@/types/types";
import RelatedItem from "./RelatedItem";

type Props = {
  related: IProduct[];
};

export default function RelatedArea({ related }: Props) {
  return (
    <div className="mt-8 flex flex-wrap">
      {related.length > 0 ? (
        related.map((r) => <RelatedItem key={r.id} r={r} />)
      ) : (
        <p>Sem Produtos Relacionados no momento ☹️</p>
      )}
    </div>
  );
}
