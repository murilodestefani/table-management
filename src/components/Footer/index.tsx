import { Divider, ButtonGroup, Button } from "@nextui-org/react";
import {
  Desk,
  UserSound,
  ForkKnife,
  IdentificationBadge,
} from "@phosphor-icons/react";

type ComponentType = "tables" | "clients" | "foods";

interface FooterProps {
  setActiveComponent: (component: ComponentType) => void;
}

export function Footer({ setActiveComponent }: FooterProps) {
  return (
    <footer className="fixed bottom-0 left-0 flex flex-col gap-1 z-10 bg-background">
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
          className="flex flex-col gap-0"
          startContent={<IdentificationBadge weight="fill" size={32} />}
          color="primary"
        >
          <p className="text-xs">Usuários</p>
        </Button>
      </ButtonGroup>
    </footer>
  );
}
