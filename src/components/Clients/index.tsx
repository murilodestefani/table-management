import { ClientProps } from "@/interfaces";
import { db } from "@services/firebaseConnection";
import {
  Button,
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
  const [clients, setClients] = useState<ClientProps[]>([]);
  const [name, setName] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");
  const [editingClient, setEditingClient] = useState<ClientProps | null>(null);

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

  const handleDeleteClient = async (id: string) => {
    try {
      const clientDoc = doc(db, "clients", id);
      await deleteDoc(clientDoc);
      setClients(clients.filter((client) => client.id !== id));
    } catch (error) {
      console.error("Error deleting client: ", error);
    }
  };

  const resetForm = () => {
    setName("");
    setTelephone("");
  };

  useEffect(() => {
    fetchClients();
  }, []);

  useEffect(() => {
    if (editingClient) {
      setName(editingClient.name);
      setTelephone(editingClient.telephone);
    } else {
      resetForm();
    }
  }, [editingClient]);

  return (
    <main className="flex max-h-full w-full gap-4 p-4">
      <form className="flex h-fit w-3/5 flex-col gap-6 rounded-lg bg-content1 p-6">
        <Input
          type="text"
          label="Nome do Cliente"
          labelPlacement="outside"
          value={name}
          onChange={(e) => setName(e.target.value)}
          startContent={
            <IdentificationCard className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
          }
        />

        <Input
          type="text"
          label="Telefone do Cliente"
          labelPlacement="outside"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          startContent={
            <Phone className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
          }
        />

        <div className="flex flex-col items-center justify-center gap-3">
          <Button
            color="primary"
            size="lg"
            radius="sm"
            fullWidth
            onClick={
              editingClient
                ? () => handleUpdateClient(editingClient.id)
                : handleAddClient
            }
          >
            {editingClient ? "Atualizar" : "Cadastrar"}
          </Button>

          <Button fullWidth size="sm" onClick={resetForm}>
            Limpar
          </Button>
        </div>
      </form>

      <Table isStriped className="flex max-h-[600px] flex-grow">
        <TableHeader>
          <TableColumn>NOME</TableColumn>
          <TableColumn>TELEFONE</TableColumn>
          <TableColumn>AÇÕES</TableColumn>
        </TableHeader>

        <TableBody
          emptyContent={<Spinner label="Carregando..." color="primary" />}
        >
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.telephone}</TableCell>
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
    </main>
  );
};
