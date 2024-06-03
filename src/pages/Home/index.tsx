import { Tables } from "@components/Tables"; // Importa o componente Tables
import { Clients } from "@components/Clients"; // Importa o componente Clients
import { Foods } from "@components/Foods"; // Importa o componente Foods
import { Header } from "@components/Header"; // Importa o componente Header
import { Dashboard } from "@/components/Dashboard"; // Importa o componente Dashboard
import { Divider, ButtonGroup, Button } from "@nextui-org/react"; // Importa componentes do NextUI
import { Desk, UserSound, ForkKnife, PresentationChart } from "@phosphor-icons/react"; // Importa ícones
import { useState } from "react"; // Importa o hook useState

// Componente para a página Home
export function Home() {
  // Estado para armazenar o componente ativo
  const [activeComponent, setActiveComponent] = useState<
    "tables" | "clients" | "foods" | "dashboard"
  >("dashboard");

  return (
    <>
      {/* Cabeçalho da página */}
      <Header />
      <main className="flex-grow">
        {/* Renderiza o componente ativo com base no estado */}
        {activeComponent === "dashboard" && <Dashboard />}
        {activeComponent === "tables" && <Tables />}
        {activeComponent === "clients" && <Clients />}
        {activeComponent === "foods" && <Foods />}
      </main>
      {/* Rodapé da página */}
      <footer className="fixed bottom-0 left-0 z-10 flex flex-col gap-1 bg-background dark:bg-foreground-50">
        {/* Divisor */}
        <Divider />
        {/* Grupo de botões para navegação entre os componentes */}
        <ButtonGroup
          variant="light"
          size="lg"
          radius="none"
          fullWidth
          className="flex py-2"
        >
          {/* Botão para exibir o componente Tables */}
          <Button
            onClick={() => setActiveComponent("tables")}
            className="flex flex-col gap-0"
            startContent={<Desk weight="fill" size={32} />}
            color="primary"
          >
            <p className="text-xs">Mesas</p>
          </Button>
          {/* Botão para exibir o componente Clients */}
          <Button
            onClick={() => setActiveComponent("clients")}
            className="flex flex-col gap-0"
            startContent={<UserSound weight="fill" size={32} />}
            color="primary"
          >
            <p className="text-xs">Clientes</p>
          </Button>
          {/* Botão para exibir o componente Foods */}
          <Button
            onClick={() => setActiveComponent("foods")}
            className="flex flex-col gap-0"
            startContent={<ForkKnife weight="fill" size={32} />}
            color="primary"
          >
            <p className="text-xs">Cardápio</p>
          </Button>
          {/* Botão para exibir o componente Dashboard */}
          <Button
            onClick={() => setActiveComponent("dashboard")}
            className="flex flex-col gap-0"
            startContent={<PresentationChart weight="fill" size={32} />}
            color="primary"
          >
            <p className="text-xs">Dashboard</p>
          </Button>
        </ButtonGroup>
      </footer>
    </>
  );
}
