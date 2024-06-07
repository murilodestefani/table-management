import { ClientProps } from "@/interfaces";
import { db } from "@services/firebaseConnection";
import {
  Button,
  Chip,
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  Spinner,
} from "@nextui-org/react";
import {
  IdentificationCard,
  Pencil,
  Phone,
  Trash,
  UserSound,
} from "@phosphor-icons/react";
import {
  getDocs,
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export const Clients: React.FC = () => {
  // Estados para armazenar dados dos clientes, campos de entrada e cliente em edição
  const [clients, setClients] = useState<ClientProps[]>([]);
  const [name, setName] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");
  const [editingClient, setEditingClient] = useState<ClientProps | null>(null);

  // Função assíncrona para buscar clientes no Firebase Firestore
  const fetchClients = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "clients"));
      const clientsData: ClientProps[] = querySnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          }) as ClientProps,
      );
      setClients(clientsData);
    } catch (error) {
      console.error("Error fetching clients: ", error);
    }
  };

  // Função para adicionar um novo cliente
  const handleAddClient = async () => {
    if (!name || !telephone) {
      alert("Preencha os campos vazios");
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "clients"), {
        name,
        telephone,
      });
      setClients([
        ...clients,
        {
          id: docRef.id,
          name,
          telephone,
        },
      ]);
      resetForm();
    } catch (error) {
      console.error("Error adding client: ", error);
    }
  };

  // Função para atualizar os dados de um cliente
  const handleUpdateClient = async (id: string) => {
    if (!name || !telephone) {
      alert("Preencha os campos vazios");
      return;
    }
    try {
      const clientDoc = doc(db, "clients", id);
      await updateDoc(clientDoc, {
        name,
        telephone,
      });
      setClients(
        clients.map((client) =>
          client.id === id ? { ...client, name, telephone } : client,
        ),
      );
      resetForm();
    } catch (error) {
      console.error("Error updating client: ", error);
    }
  };

  // Função para deletar um cliente
  const handleDeleteClient = async (id: string) => {
    try {
      const clientDoc = doc(db, "clients", id);
      await deleteDoc(clientDoc);
      setClients(clients.filter((client) => client.id !== id));
    } catch (error) {
      console.error("Error deleting client: ", error);
    }
  };

  // Função para resetar os campos de entrada
  const resetForm = () => {
    setName("");
    setTelephone("");
  };

  // Efeito para buscar clientes quando o componente é montado
  useEffect(() => {
    fetchClients();
  }, []);

  // Efeito para atualizar os campos de entrada quando o cliente em edição é alterado
  useEffect(() => {
    if (editingClient) {
      setName(editingClient.name);
      setTelephone(editingClient.telephone);
    } else {
      resetForm();
    }
  }, [editingClient]);

  // Renderização do componente de Clientes
  return (
    <section className="flex flex-col gap-6">
      {/* Cabeçalho */}
      <header className="flex items-center justify-center gap-1">
        <Chip
          color={"primary"}
          size="lg"
          variant="flat"
          startContent={<UserSound weight="fill" />}
        >
          <h1>Clientes</h1>
        </Chip>
      </header>

      {/* Campos de entrada para nome e telefone do cliente */}
      <Input
        type="text"
        label="Nome do Cliente"
        value={name}
        onChange={(e) => setName(e.target.value)}
        startContent={
          <IdentificationCard className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
        }
      />

      <Input
        type="text"
        label="Telefone do Cliente"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
        startContent={
          <Phone className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
        }
      />

      {/* Botão para adicionar ou atualizar um cliente */}
      <div className="flex flex-col items-center justify-center gap-3">
        <Button
          color="primary"
          size="lg"
          fullWidth
          onClick={
            editingClient
              ? () => handleUpdateClient(editingClient.id)
              : handleAddClient
          }
        >
          {editingClient ? "Atualizar" : "Cadastrar"}
        </Button>

        <Button className="w-fit" size="sm" onClick={resetForm}>
          Limpar
        </Button>
      </div>

      {/* Tabela para exibir os clientes cadastrados */}
      <Table isStriped className="md:max-h-56">
        <TableHeader>
          <TableColumn>NOME</TableColumn>
          <TableColumn>TELEFONE</TableColumn>
          <TableColumn>AÇÕES</TableColumn>
        </TableHeader>

        <TableBody
          emptyContent={<Spinner label="Carregando..." color="primary" />}
        >
          {/* Mapeamento dos clientes para renderização das linhas da tabela */}
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.telephone}</TableCell>
              {/* Coluna de ações com botões para editar e deletar o cliente */}
              <TableCell>
                <div className="relative flex items-center gap-2">
                  <Tooltip content="Editar">
                    <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                      <Pencil onClick={() => setEditingClient(client)} />
                    </span>
                  </Tooltip>
                  <Tooltip color="danger" content="Deletar">
                    <span className="cursor-pointer text-lg text-danger active:opacity-50">
                      <Trash onClick={() => handleDeleteClient(client.id)} />
                    </span>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};
