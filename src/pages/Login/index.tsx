import { FormEvent, useState } from "react"; // Importa o hook useState para gerenciar o estado dos campos do formulário
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate para redirecionar o usuário após o login
import { auth } from "../../services/firebaseConnection"; // Importa o serviço de autenticação do Firebase
import { signInWithEmailAndPassword } from "firebase/auth"; // Importa a função para login com email e senha do Firebase
import person from "@images/person.png"; // Importa a imagem de usuário padrão
import { useAuth } from "@context/AuthContext"; // Importa o hook useAuth do contexto de autenticação
import { Button, Image, Input } from "@nextui-org/react"; // Importa componentes do NextUI
import { Envelope, Key } from "@phosphor-icons/react"; // Importa ícones de envelope e chave

// Componente para a página de login
export function Login() {
  // Estados para armazenar email e senha do usuário
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook para navegar para outras páginas
  const { setIsAuthenticated, setEmail: setAuthEmail } = useAuth(); // Hook para gerenciar o contexto de autenticação

  // Função para lidar com o envio do formulário de login
  function handleLogin(e: FormEvent) {
    e.preventDefault(); // Impede o comportamento padrão do formulário

    // Verifica se os campos de email e senha estão preenchidos
    if (email === "" || password === "") {
      alert("Preencha todos os campos");
      return;
    }

    // Tenta realizar o login com email e senha fornecidos
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Em caso de sucesso, define o usuário como autenticado e redireciona para a página inicial
        alert(`Logado com sucesso!`);
        setIsAuthenticated(true);
        setAuthEmail(email);
        navigate("/home", { replace: true });
      })
      .catch((error) => {
        // Em caso de erro, exibe uma mensagem de alerta com o erro ocorrido
        alert(`Erro ao fazer login\n\nErro:${error}`);
        console.log(error);
      });
  }

  // Renderiza o componente de login
  return (
    // Conteúdo da página de login
    <main className="flex h-dvh flex-col items-center justify-center">
      <section className="flex h-full w-full flex-col items-center justify-center">
        {/* Formulário de login */}
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 rounded-2xl p-8 shadow-xl dark:bg-foreground-50"
        >
          {/* Título e descrição do formulário */}
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-lg font-extrabold text-primary">Login!</h1>
            <p className="text-lg font-medium">Digite seu email e senha.</p>
          </div>

          {/* Imagem de usuário */}
          <Image src={person} />

          {/* Campo de entrada para o email */}
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
          {/* Campo de entrada para a senha */}
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

          {/* Botão de envio do formulário */}
          <Button type="submit" color="primary" size="lg">
            Entrar
          </Button>
        </form>
      </section>
    </main>
  );
}
