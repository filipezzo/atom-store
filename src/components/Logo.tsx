import { Atom } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo({ variant = false }: { variant?: boolean }) {
  return (
    <h1
      className={`font-bold tracking-widest hover:opacity-50 ${
        variant && "text-white"
      }`}
    >
      <Link to="/" className="flex gap-2">
        <Atom />
        Tech
      </Link>
    </h1>
  );
}
