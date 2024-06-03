import welcome from "@images/welcome.jpg";
import { Button } from "@nextui-org/react";
import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export function Welcome() {
  return (
    <main className="relative h-screen w-full p-0">
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent to-black"></div>
      <div className="absolute inset-0 z-10 bg-black opacity-30"></div>
      <img
        className="absolute inset-0 z-0 h-full w-full object-cover blur-sm"
        src={welcome}
        alt="Welcome background"
      />
      <div className="relative z-50 flex h-full flex-col items-center justify-end gap-4 bg-opacity-50 p-4 text-center">
        <p className="text-4xl font-light text-foreground-50">
          <b className="font-semibold">Sem preocupação</b>, faça reservas com
          <h1 className="font-semibold">TableEase</h1>
        </p>
        <span className="font-extralight text-foreground-50">
          TableEase vem para facilitar a reserva de mesas.
        </span>
        <Link to="/login">
          <Button className="mb-6" isIconOnly color="primary" size="lg" radius="full">
            <ArrowRight color="white" className="text-4xl" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
