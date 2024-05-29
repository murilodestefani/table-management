import welcome from "@images/welcome.jpg";
import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
export function Welcome() {
  return (
    <main className="relative">
      <div className="absolute z-20 h-full w-full bg-gradient-to-b from-transparent to-black"></div>
      <div className="absolute z-10 h-full w-full bg-black opacity-30"></div>
      <img
        className="absolute z-0 h-full w-full object-cover blur-sm"
        src={welcome}
      />
      <div className="relative z-50 h-full w-full items-center justify-end p-4">
        <div className="mb-20 flex h-full w-full flex-col items-center justify-end gap-4 text-center">
          <h2 className="text-4xl font-light text-white"><strong className="font-semibold">Sem preocupação</strong>, faça reservas com <strong className="font-semibold">TableEase</strong></h2>
          <p className="font-extralight text-white">
            TableEase facilita a reserva de mesas nos restaurantes.
          </p>
          <Link to="/login">
            <button className="rounded-full p-4 mb-20">
              <ArrowRight weight="bold" color="white" className="text-4xl" />
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
