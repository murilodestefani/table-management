import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";
import person from "@images/person.png";
import { useAuth } from "@context/AuthContext";

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
      <section className="flex h-full w-full items-center justify-center p-4">
        <form
          onSubmit={handleLogin}
          className="flex w-full flex-col gap-4 rounded-2xl bg-white p-8 shadow-xl shadow-zinc-200"
        >
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-lg font-extrabold text-[#FA5A00]">Login!</h1>
            <p className="text-lg font-medium text-[#8E8EA9]">
              Digite seu email e senha.
            </p>
          </div>

          <img src={person} />
          <input
            type="email"
            placeholder="email@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full" type="submit">
            Entrar
          </button>
        </form>
      </section>
    </main>
  );
}
