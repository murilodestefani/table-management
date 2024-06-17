import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "@context/AuthContext";
import { Button, Input, Switch } from "@nextui-org/react";
import { Eye, EyeSlash, Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setIsAuthenticated, setEmail: setAuthEmail } = useAuth();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const { theme, setTheme } = useTheme();

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Preencha todos os campos");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert(`Logado com sucesso!`);
        setIsAuthenticated(true);
        setAuthEmail(email);
        navigate("/home", { replace: true });
      })
      .catch((error) => {
        alert(`Erro ao fazer login\n\nErro:${error}`);
        console.log(error);
      });
  }

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <main className="flex min-h-svh w-full flex-col items-center justify-center gap-6">
      <form
        onSubmit={handleLogin}
        className="flex w-1/3 flex-col gap-6 rounded-md border border-content3 bg-content1 p-6"
      >
        <h1 className="text-2xl font-bold">Login</h1>
        <Input
          type="email"
          label="Email"
          placeholder="seuemail@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          labelPlacement="outside"
          radius="sm"
        />
        <Input
          label="Password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          labelPlacement="outside"
          radius="sm"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlash
                  weight="fill"
                  className="pointer-events-none text-2xl text-default-400"
                />
              ) : (
                <Eye
                  weight="fill"
                  className="pointer-events-none text-2xl text-default-400"
                />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
        />
        <Button type="submit" color="primary" radius="sm" fullWidth>
          Entrar
        </Button>
      </form>
      <Switch
        onChange={handleThemeChange}
        size="sm"
        color="default"
        startContent={<Moon weight="fill" />}
        endContent={<Sun weight="fill" />}
      />
    </main>
  );
}
