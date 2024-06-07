import { Tables } from "@components/Tables"; // Importa o componente Tables
import { Clients } from "@components/Clients"; // Importa o componente Clients
import { Foods } from "@components/Foods"; // Importa o componente Foods
import { Dashboard } from "@components/Dashboard"; // Importa o componente Dashboard
import {
  Avatar,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Switch,
} from "@nextui-org/react"; // Importa componentes do NextUI
import {
  Moon,
  Sun,
} from "@phosphor-icons/react"; // Importa ícones
import { useState } from "react"; // Importa o hook useState
import { useAuth } from "@context/AuthContext";
import { userPhoto } from "@context/userData";
import { useTheme } from "next-themes";
import React from "react";

// Componente para a página Home
export function Home() {
  // Estado para armazenar o componente ativo
  const [activeComponent, setActiveComponent] = useState<
    "tables" | "clients" | "foods" | "dashboard"
  >("dashboard");

  const { setIsAuthenticated } = useAuth(); // Acessando contexto de autenticação
  const { theme, setTheme } = useTheme(); // Acessando hook de tema

  const { email } = useAuth(); // Obtendo email do usuário do contexto de autenticação

  // Função para lidar com o logout
  const handleSignOut = () => {
    setIsAuthenticated(false); // Definindo status de autenticação como falso
  };

  // Função para lidar com a mudança de tema
  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark"); // Mudar para o tema escuro se estiver atualmente claro
    } else {
      setTheme("light"); // Mudar para o tema claro se estiver atualmente escuro
    }
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    <Link onClick={() => setActiveComponent("tables")}>Mesas</Link>,
    <Link onClick={() => setActiveComponent("clients")}>Clientes</Link>,
    <Link onClick={() => setActiveComponent("foods")}>Cardápio</Link>,
    <Link onClick={() => setActiveComponent("dashboard")}>Dashboard</Link>,
    <Link color="danger" onClick={handleSignOut}>Log Out</Link>,
    <Switch
      onChange={handleThemeChange}
      defaultSelected
      size="sm"
      color="default"
      startContent={<Moon weight="fill" />}
      endContent={<Sun weight="fill" />}
    ></Switch>,
  ];

  return (
    <div className="flex min-h-dvh flex-col">
      {/* Cabeçalho da página */}
      <Navbar
        className="dark:bg-foreground-200"
        onMenuOpenChange={setIsMenuOpen}
      >
        {/* Componente Navbar */}
        <NavbarBrand className="flex gap-2">
          {/* Seção da marca do Navbar com avatar e informações do usuário */}

          <Avatar
            size="sm"
            isBordered
            color="primary"
            src={email ? userPhoto(email) : undefined} // Exibindo avatar do usuário se o email estiver disponível
          />
          <div className="flex flex-col">
            <span className="text-xs">Bem vindo(a) 👋</span> {/* Saudação */}
            <p className="line-clamp-1 text-xs font-semibold">{email}</p>{" "}
            {/* Exibindo email do usuário */}
          </div>
        </NavbarBrand>
        <NavbarContent justify="end" className="flex flex-1 gap-1">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        <NavbarMenu className="md:max-w-[414px] md:mx-auto">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full" href="#">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <main className="flex-grow overflow-x-auto">
        {/* Renderiza o componente ativo com base no estado */}
        {activeComponent === "dashboard" && <Dashboard />}
        {activeComponent === "tables" && <Tables />}
        {activeComponent === "clients" && <Clients />}
        {activeComponent === "foods" && <Foods />}
      </main>
    </div>
  );
}
