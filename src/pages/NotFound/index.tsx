import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <main className="flex h-svh w-full flex-col items-center justify-center gap-4">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <h3 className="text-4xl font-bold">Página não encontrada</h3>
      <p className="text-lg text-content4">
        Desculpe, não conseguimos encontrar essa página.
      </p>
      <Link to="/">
        <Button color="primary" radius="sm">
          Voltar para Home
        </Button>
      </Link>
    </main>
  );
}
