import { ReactNode } from "react";

export default function ContainerList({ children }: { children: ReactNode }) {
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2  xl:grid-cols-3 ">
      {children}
    </ul>
  );
}
