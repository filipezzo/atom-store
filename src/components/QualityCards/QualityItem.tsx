import { IQuality } from "@/types/types";

type Props = {
  quality: IQuality;
};
export default function QualityItem({ quality }: Props) {
  return (
    <li className="flex flex-1 flex-col flex-wrap gap-2">
      {quality.icon}
      <strong>{quality.title}</strong>
      <p>{quality.text}</p>
    </li>
  );
}
