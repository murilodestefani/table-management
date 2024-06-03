import { useAuth } from "@/context/AuthContext";
import {
  Navbar,
  NavbarBrand,
  Avatar,
  NavbarContent,
  Button,
  Divider,
  Switch,
} from "@nextui-org/react";
import { Moon, SignOut, Sun } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

export function Header() {
  const { setIsAuthenticated } = useAuth();
  const { theme, setTheme } = useTheme();

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <header>
      <Navbar>
        <NavbarBrand className="flex gap-2">
          <Avatar
            size="sm"
            isBordered
            color="primary"
            src="https://source.unsplash.com/random/?portrait"
          />
          <div className="flex flex-col">
            <span className="text-xs">Bem vindo(a) 👋</span>
            <p className="text-xs font-semibold">nome@estudante.ifms.edu.br</p>
          </div>
        </NavbarBrand>
        <NavbarContent>
          <Switch
            onChange={handleThemeChange}
            defaultSelected
            size="lg"
            color="default"
            startContent={<Moon weight="fill" />}
            endContent={<Sun weight="fill" />}
          ></Switch>
        </NavbarContent>
        <NavbarContent justify="end">
          <Button onClick={handleSignOut} size="sm" isIconOnly variant="flat">
            <SignOut />
          </Button>
        </NavbarContent>
      </Navbar>
      <Divider />
    </header>
  );
}
