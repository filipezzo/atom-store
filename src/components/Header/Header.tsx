import Logo from "../Logo";
import NavHeader from "./NavHeader";

export default function Header() {
  return (
    <header className=" container flex w-full items-center justify-between p-4">
      <Logo />
      <NavHeader />
    </header>
  );
}
