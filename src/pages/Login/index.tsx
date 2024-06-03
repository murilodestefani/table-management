import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";
import person from "@images/person.png";
import { useAuth } from "@context/AuthContext";
import { Button, Image, Input } from "@nextui-org/react";
import { Envelope, Key } from "@phosphor-icons/react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();

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
        navigate("/home", { replace: true });
      })
      .catch((error) => {
        alert(`Erro ao fazer login\n\nErro:${error}`);
        console.log(error);
      });
  }

  return (
    <main>
      <section className="flex flex-col h-full w-full items-center justify-center">
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 rounded-2xl p-8 shadow-xl"
        >
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-lg font-extrabold text-primary">Login!</h1>
            <p className="text-lg font-medium">Digite seu email e senha.</p>
          </div>

          <Image src={person} />

          <Input
            type="email"
            label="Email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            startContent={
              <Envelope className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
            }
          />
          <Input
            type="password"
            label="Senha"
            placeholder="Entre com sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            startContent={
              <Key className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
            }
          />

          <Button type="submit" color="primary" size="lg">
            Entrar
          </Button>
        </form>
      </section>
    </main>
  );
}
