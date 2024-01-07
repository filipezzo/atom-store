import QualityCards from "@/components/QualityCards/QualityCards";

export default function ConfirmationPage() {
  return (
    <main className="container flex h-screen flex-col items-center justify-center gap-8">
      <h1 className="text-center text-5xl font-bold">
        Obrigado por comprar conosco!
      </h1>
      <p className="text-center">
        Sua compra foi confirmada. Você receberá um email
      </p>
      <QualityCards />
    </main>
  );
}
