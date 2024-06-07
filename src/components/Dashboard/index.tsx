import { collection, getDocs } from "firebase/firestore"; // Importação das funções collection e getDocs do Firestore
import { db } from "@services/firebaseConnection"; // Importação da conexão com o Firebase
import { useEffect, useState } from "react"; // Importação do hook useEffect e useState do React
import { Chip, Image } from "@nextui-org/react"; // Importação de componentes de UI do Next.js
import {
  Desk,
  ForkKnife,
  PresentationChart,
  UserSound,
} from "@phosphor-icons/react"; // Importação de ícones do Phosphor Icons
import restaurant from "@images/restaurant.jpg"; // Importação da imagem do restaurante

export function Dashboard() {
  const [clientsCount, setClientsCount] = useState<number | null>(null); // Estado para armazenar o número de clientes cadastrados
  const [tablesCount, setTablesCount] = useState<number | null>(null); // Estado para armazenar o número de mesas cadastradas

  // Função para contar o número de clientes no banco de dados
  const countClients = async (): Promise<number> => {
    try {
      const querySnapshot = await getDocs(collection(db, "clients")); // Obtém uma coleção de documentos da coleção "clients" no Firestore
      return querySnapshot.size; // Retorna o número de documentos na coleção
    } catch (error) {
      console.error("Error counting clients: ", error); // Log de erro, caso ocorra algum problema
      return 0; // Retorna 0 em caso de erro
    }
  };

  // Função para contar o número de mesas no banco de dados
  const countTables = async (): Promise<number> => {
    try {
      const querySnapshot = await getDocs(collection(db, "tables")); // Obtém uma coleção de documentos da coleção "tables" no Firestore
      return querySnapshot.size; // Retorna o número de documentos na coleção
    } catch (error) {
      console.error("Error counting tables: ", error); // Log de erro, caso ocorra algum problema
      return 0; // Retorna 0 em caso de erro
    }
  };

  // Hook useEffect para executar a contagem de clientes e mesas quando o componente for montado
  useEffect(() => {
    const fetchData = async () => {
      const tables = await countTables(); // Conta o número de mesas
      const clients = await countClients(); // Conta o número de clientes
      setTablesCount(tables); // Atualiza o estado com o número de mesas
      setClientsCount(clients); // Atualiza o estado com o número de clientes
    };

    fetchData(); // Chamada da função fetchData para buscar os dados
  }, []);

  // Retorno do componente
  return (
    <section className="flex flex-col gap-6">
      {/* Cabeçalho da seção */}
      <header className="flex items-center justify-center gap-1">
        {/* Chip com o título do Dashboard */}
        <Chip
          color={"primary"}
          size="lg"
          variant="flat"
          startContent={<PresentationChart weight="fill" />}
        >
          <h1>Dashboard</h1>
        </Chip>
      </header>

      {/* Seção principal */}
      <header className="relative z-10 w-full overflow-clip rounded-xl">
        {/* Imagem do restaurante */}
        <Image
          src={restaurant}
          radius="none"
          alt="Interior do nosso restaurante"
        />
        {/* Overlay com gradiente */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent to-black"></div>
        {/* Conteúdo sobreposto */}
        <div className="absolute bottom-0 z-30 p-6 text-white">
          {/* Informações sobre o restaurante */}
          <div className="flex items-center gap-2">
            <div className="flex size-fit items-center justify-center rounded-full bg-white p-2">
              <ForkKnife weight="fill" className="text-3xl text-primary" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-medium">TableEase</h2>
              <p className="text-sm text-white/50">
                App de gerenciamento de reservas
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Cards de estatísticas */}
      <div className="flex flex-col gap-6">
        {/* Card de mesas cadastradas */}
        <article className="flex items-center gap-4 rounded-xl bg-foreground-200 p-6 dark:bg-foreground-50">
          <div className="flex items-center justify-center rounded-full bg-white p-4">
            <Desk className="text-2xl text-black" />
          </div>
          <div className="flex items-center gap-2">
            {/* Número de mesas cadastradas */}
            <strong className="text-5xl font-black">
              <p>{tablesCount}</p>
            </strong>
            <p className="text-lg font-medium">Mesas Cadastradas</p>
          </div>
        </article>

        {/* Card de clientes cadastrados */}
        <article className="flex items-center gap-4 rounded-xl bg-foreground-200 p-6 dark:bg-foreground-50">
          <div className="flex items-center justify-center rounded-full bg-white p-4">
            <UserSound className="text-2xl text-black" />
          </div>
          <div className="flex items-center gap-2">
            {/* Número de clientes cadastrados */}
            <strong className="text-5xl font-black">
              <p>{clientsCount}</p>
            </strong>
            {/* Texto indicando o número de clientes cadastrados */}
            <p className="text-lg font-medium">Clientes Cadastrados</p>
          </div>
        </article>
      </div>
    </section>
  );
}
