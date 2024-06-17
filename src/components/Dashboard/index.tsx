import { collection, getDocs } from "firebase/firestore";
import { db } from "@services/firebaseConnection";
import { useEffect, useState } from "react";

export function Dashboard() {
  const [clientsCount, setClientsCount] = useState<number | null>(null);
  const [tablesCount, setTablesCount] = useState<number | null>(null);

  const countClients = async (): Promise<number> => {
    try {
      const querySnapshot = await getDocs(collection(db, "clients"));
      return querySnapshot.size;
    } catch (error) {
      console.error("Error counting clients: ", error);
      return 0;
    }
  };

  const countTables = async (): Promise<number> => {
    try {
      const querySnapshot = await getDocs(collection(db, "tables"));
      return querySnapshot.size;
    } catch (error) {
      console.error("Error counting tables: ", error);
      return 0;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const tables = await countTables();
      const clients = await countClients();
      setTablesCount(tables);
      setClientsCount(clients);
    };

    fetchData();
  }, []);

  return (
    <main className="relative z-0 h-full w-full bg-restaurant bg-cover">
      <div className="absolute top-0 z-10 h-full w-full bg-black/80"></div>
      <section className="absolute z-20 flex h-full w-full flex-col items-center justify-center gap-4 p-4">
        <h2 className="text-center text-6xl leading-tight text-white">
          Sem preocupação, faça reservas com <b>TableEase</b>
        </h2>
        <p className="text-white">
          TableEase vem para facilitar a reserva de mesas.
        </p>
        <section className="flex gap-4">
          <article className="flex flex-col items-center rounded-md bg-primary/20 p-4 text-primary">
            <h6 className="text-3xl font-bold">{tablesCount} Mesas</h6>
            <span>Registradas</span>
          </article>
          <article className="flex flex-col items-center rounded-md bg-primary/20 p-4 text-primary">
            <h6 className="text-3xl font-bold">{clientsCount} Clientes</h6>
            <span>Cadastrados</span>
          </article>
        </section>
      </section>
    </main>
  );
}
