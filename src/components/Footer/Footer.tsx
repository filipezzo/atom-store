import Logo from "../Logo";
import FooterRights from "./FooterRights";

export default function Footer() {
  return (
    <footer className=" flex h-[100px] w-full items-center justify-between bg-black text-white dark:bg-white">
      <div className="container flex items-center justify-between">
        <Logo variant />
        <FooterRights />
      </div>
      <ul></ul>
    </footer>
  );
}
