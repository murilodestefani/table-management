import { Tables } from "@components/Tables";
import { Clients } from "@components/Clients";
import { Foods } from "@components/Foods";
import { Header } from "@components/Header";
import { Dashboard } from "@/components/Dashboard";
import { Divider, ButtonGroup, Button } from "@nextui-org/react";
import {
  Desk,
  UserSound,
  ForkKnife,
  PresentationChart,
} from "@phosphor-icons/react";
import { useState } from "react";

export function Home() {
  const [activeComponent, setActiveComponent] = useState<
    "tables" | "clients" | "foods" | "dashboard"
  >("dashboard");

  return (
    <>
      <Header />
      <main className="flex-grow">
        {activeComponent === "dashboard" && <Dashboard />}
        {activeComponent === "tables" && <Tables />}
        {activeComponent === "clients" && <Clients />}
        {activeComponent === "foods" && <Foods />}
      </main>
      <footer className="fixed bottom-0 left-0 z-10 flex flex-col gap-1 bg-background">
        <Divider />
        <ButtonGroup
          variant="light"
          size="lg"
          radius="none"
          fullWidth
          className="flex py-2"
        >
          <Button
            onClick={() => setActiveComponent("tables")}
            className="flex flex-col gap-0"
            startContent={<Desk weight="fill" size={32} />}
            color="primary"
          >
            <p className="text-xs">Mesas</p>
          </Button>
          <Button
            onClick={() => setActiveComponent("clients")}
            className="flex flex-col gap-0"
            startContent={<UserSound weight="fill" size={32} />}
            color="primary"
          >
            <p className="text-xs">Clientes</p>
          </Button>
          <Button
            onClick={() => setActiveComponent("foods")}
            className="flex flex-col gap-0"
            startContent={<ForkKnife weight="fill" size={32} />}
            color="primary"
          >
            <p className="text-xs">Cardápio</p>
          </Button>
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
