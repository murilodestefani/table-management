import welcome from "@images/welcome.jpg"; // Importa a imagem de boas-vindas
import { Button } from "@nextui-org/react"; // Importa o componente Button do NextUI
import { ArrowRight } from "@phosphor-icons/react"; // Importa o ícone de seta direita
import { Link } from "react-router-dom"; // Importa o componente Link do React Router

// Componente para a página de boas-vindas
export function Welcome() {
  return (
    // Conteúdo da página de boas-vindas
    <main className="relative h-dvh w-full p-0">
      {/* Camada de gradiente para sobrepor a imagem de fundo */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent to-black"></div>
      {/* Camada de opacidade para escurecer a imagem de fundo */}
      <div className="absolute inset-0 z-10 bg-black opacity-30"></div>
      {/* Imagem de fundo de boas-vindas */}
      <img
        className="absolute inset-0 z-0 h-full w-full object-cover blur-sm"
        src={welcome}
        alt="Welcome background"
      />
      {/* Conteúdo principal da página */}
      <div className="relative z-50 flex h-full flex-col items-center justify-end gap-4 bg-opacity-50 p-4 text-center">
        {/* Título da página */}
        <h1 className="text-4xl font-light text-white">
          <b className="font-semibold">Sem preocupação</b>, faça reservas com
          <b className="font-semibold">TableEase</b>
        </h1>
        {/* Descrição da página */}
        <span className="font-extralight text-white">
          TableEase vem para facilitar a reserva de mesas.
        </span>
        {/* Botão de redirecionamento para a página de login */}
        <Link to="/login">
          <Button
            className="mb-6"
            isIconOnly
            color="primary"
            size="lg"
            radius="full"
          >
            <ArrowRight color="white" className="text-4xl" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
