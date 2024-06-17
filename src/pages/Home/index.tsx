import { Tables } from "@components/Tables";
import { Clients } from "@components/Clients";
import { Foods } from "@components/Foods";
import { Dashboard } from "@components/Dashboard";
import { Avatar, Button, Divider, Switch } from "@nextui-org/react";
import {
  Desk,
  Gauge,
  Hamburger,
  Moon,
  SignOut,
  Sun,
  User,
} from "@phosphor-icons/react";
import { useState } from "react";
import { useAuth } from "@context/AuthContext";
import { userPhoto } from "@context/userData";
import { useTheme } from "next-themes";
import { Logo } from "@/components/Logo";

export function Home() {
  const [activeComponent, setActiveComponent] = useState<
    "tables" | "clients" | "foods" | "dashboard"
  >("dashboard");
  const { setIsAuthenticated, email } = useAuth();
  const { theme, setTheme } = useTheme();

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <main className="flex w-full">
      <nav className="flex min-h-full w-1/4 flex-col gap-4 bg-content1 p-4">
        <Logo />
        <Divider />
        <section className="flex w-full flex-col items-center justify-center gap-4">
          <Avatar
            color="primary"
            isBordered
            size="lg"
            src={email ? userPhoto(email) : undefined}
          />
          <p className="line-clamp-1 text-xs font-bold">{email}</p>
          <Button
            onClick={handleSignOut}
            color="default"
            variant="ghost"
            radius="sm"
            fullWidth
            startContent={<SignOut />}
            className="border"
          >
            Logout
          </Button>
        </section>
        <Divider />
        <section className="flex w-full flex-grow flex-col items-center">
          <Button
            onClick={() => setActiveComponent("tables")}
            variant="light"
            radius="sm"
            fullWidth
            size="lg"
            startContent={<Desk className="text-default-400" weight="fill" />}
            className="justify-start"
          >
            Mesas
          </Button>
          <Button
            onClick={() => setActiveComponent("clients")}
            variant="light"
            radius="sm"
            fullWidth
            size="lg"
            startContent={<User className="text-default-400" weight="fill" />}
            className="justify-start"
          >
            Clientes
          </Button>
          <Button
            onClick={() => setActiveComponent("foods")}
            variant="light"
            radius="sm"
            fullWidth
            size="lg"
            startContent={
              <Hamburger className="text-default-400" weight="fill" />
            }
            className="justify-start"
          >
            Cardápio
          </Button>
          <Button
            onClick={() => setActiveComponent("dashboard")}
            variant="light"
            radius="sm"
            fullWidth
            size="lg"
            startContent={<Gauge className="text-default-400" weight="fill" />}
            className="justify-start"
          >
            Dashboard
          </Button>
        </section>
        <section className="flex w-full flex-col items-center justify-center">
          <Switch
            onChange={handleThemeChange}
            size="sm"
            color="default"
            startContent={<Moon weight="fill" />}
            endContent={<Sun weight="fill" />}
          />
        </section>
      </nav>
      <div className="flex min-h-svh w-full items-center justify-center bg-default">
        {activeComponent === "dashboard" && <Dashboard />}
        {activeComponent === "tables" && <Tables />}
        {activeComponent === "clients" && <Clients />}
        {activeComponent === "foods" && <Foods />}
      </div>
    </main>
  );
}
