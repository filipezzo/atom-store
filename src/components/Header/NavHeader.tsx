import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useFirebase } from "@/context/FirebaseContext";
import AvatarEl from "../Avatar";

type NavItemType = {
  label: string;
  path: string;
  icon?: React.ReactNode;
};

const items: NavItemType[] = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/produtos" },
  {
    label: "Cart",
    path: "/cart",
    icon: <ShoppingBag />,
  },
];

export default function NavHeader() {
  const { authenticateWithGoogle, user } = useFirebase();

  return (
    <nav>
      <ul className="flex items-center gap-4">
        {items.map((item) => (
          <NavItem key={item.label} item={item} />
        ))}

        {user && user.photoURL ? (
          <AvatarEl onClick={authenticateWithGoogle} src={user.photoURL} />
        ) : (
          <Button onClick={authenticateWithGoogle}>Login</Button>
        )}
      </ul>
    </nav>
  );
}

type NavItemProps = {
  item: NavItemType;
};

function NavItem({ item }: NavItemProps) {
  return (
    <li className="transition-all hover:scale-105">
      <Link to={item.path}>{item.icon ? item.icon : item.label}</Link>
    </li>
  );
}
