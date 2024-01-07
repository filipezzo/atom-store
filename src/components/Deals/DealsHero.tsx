import hero from "../../assets/image-3.svg";

export default function DealsHero() {
  return (
    <div>
      <img
        className="h-[300px] w-full rounded-md object-cover object-center"
        src={hero}
        alt="banner de ofertas"
      />
    </div>
  );
}
