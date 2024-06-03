import React from "react";
import {
  Navbar,
  NavbarBrand,
  Avatar,
  NavbarContent,
  Button,
  Divider,
  Switch,
} from "@nextui-org/react"; // Importando componentes de interface do usuário
import { Moon, SignOut, Sun } from "@phosphor-icons/react"; // Importando ícones
import { useTheme } from "next-themes"; // Importando hook de tema
import { useAuth } from "@context/AuthContext"; // Importando contexto de autenticação
import { userPhoto } from "@context/userData"; // Importando função de foto do usuário

export const Header: React.FC = () => {
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

  return (
    <header className="dark:bg-foreground-200"> {/* Seção do cabeçalho com fundo escuro */}
      <Navbar> {/* Componente Navbar */}
        <NavbarBrand className="flex gap-2"> {/* Seção da marca do Navbar com avatar e informações do usuário */}
          <Avatar
            size="sm"
            isBordered
            color="primary"
            src={email ? userPhoto(email) : undefined} // Exibindo avatar do usuário se o email estiver disponível
          />
          <div className="flex flex-col">
            <span className="text-xs">Bem vindo(a) 👋</span> {/* Saudação */}
            <p className="line-clamp-1 text-xs font-semibold">{email}</p> {/* Exibindo email do usuário */}
          </div>
        </NavbarBrand>
        <NavbarContent justify="end" className="flex flex-1 gap-1">
          <Switch
            onChange={handleThemeChange}
            defaultSelected
            size="sm"
            color="default"
            startContent={<Moon weight="fill" />}
            endContent={<Sun weight="fill" />}
          ></Switch>
          <Button onClick={handleSignOut} size="sm" isIconOnly>
            <SignOut />
          </Button>
        </NavbarContent>
      </Navbar>
      <Divider />
    </header>
  );
};
