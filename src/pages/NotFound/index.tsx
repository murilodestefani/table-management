import { Button } from "@nextui-org/react"; // Importa o componente Button do NextUI
import { SmileyXEyes } from "@phosphor-icons/react"; // Importa o ícone de SmileyXEyes
import { Link } from "react-router-dom"; // Importa o componente Link do React Router

// Componente para a página 404 (Não encontrada)
export function NotFound() {
  return (
    // Conteúdo da página
    <main className="flex h-svh flex-col items-center justify-center gap-8">
      {/* Cabeçalho da página */}
      <header className="flex flex-col items-center text-primary">
        {/* Ícone de SmileyXEyes para representar um rosto feliz com olhos bem abertos */}
        <SmileyXEyes className="text-9xl" />
        {/* Título da página */}
        <h1 className="text-5xl font-extrabold">404</h1>
      </header>

      {/* Mensagem de erro */}
      <div className="flex flex-col items-center gap-1">
        {/* Título do erro */}
        <h3 className="text-2xl font-bold">Oops!</h3>
        {/* Descrição do erro */}
        <p className="text-center">
          Parece que esta página está fora do ar ou em manutenção
        </p>
      </div>

      {/* Botão de redirecionamento para a página de login */}
      <Link to="/login" className="w-full">
        {/* Botão para voltar à página de login */}
        <Button color="primary" size="lg" fullWidth>
          Voltar
        </Button>
      </Link>
    </main>
  );
}
