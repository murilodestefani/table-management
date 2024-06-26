import React, { useEffect, useState } from "react";
import { TableProps, ClientProps } from "@/interfaces";
import { db } from "@services/firebaseConnection";
import {
  getDocs,
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { Chair, Hash, Pencil, Trash } from "@phosphor-icons/react";
import {
  Table,
  Switch,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  Button,
  Chip,
  Select,
  SelectItem,
  Spinner,
  Input,
} from "@nextui-org/react";

export const Tables: React.FC = () => {
  const [tables, setTables] = useState<TableProps[]>([]);
  const [number, setNumber] = useState<string>("");
  const [seats, setSeats] = useState<string>("");
  const [isReserved, setIsReserved] = useState<boolean>(false);
  const [editingTable, setEditingTable] = useState<TableProps | null>(null);
  const [clients, setClients] = useState<ClientProps[]>([]);
  const [selectedClientId, setSelectedClientId] = useState<string>("");

  const fetchTables = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "tables"));
      const tablesData: TableProps[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as TableProps[];
      setTables(tablesData);
    } catch (error) {
      console.error("Error fetching tables: ", error);
    }
  };

  const fetchClients = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "clients"));
      const clientsData: ClientProps[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ClientProps[];
      setClients(clientsData);
    } catch (error) {
      console.error("Error fetching clients: ", error);
    }
  };

  const handleAddTable = async () => {
    if (!number || !seats) {
      alert("Preencha os campos vazios");
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "tables"), {
        number,
        seats,
        isReserved,
        clientId: isReserved ? selectedClientId : "",
      });
      setTables([
        ...tables,
        {
          id: docRef.id,
          number,
          seats,
          isReserved,
          clientId: isReserved ? selectedClientId : "",
        },
      ]);
      resetForm();
    } catch (error) {
      console.error("Error adding table: ", error);
    }
  };

  const handleUpdateTable = async (id: string) => {
    if (!number || !seats) {
      alert("Preencha os campos vazios");
      return;
    }
    try {
      const tableDoc = doc(db, "tables", id);
      await updateDoc(tableDoc, {
        number,
        seats,
        isReserved,
        clientId: isReserved ? selectedClientId : "",
      });
      setTables(
        tables.map((table) =>
          table.id === id
            ? { id, number, seats, isReserved, clientId: selectedClientId }
            : table,
        ),
      );
      resetForm();
    } catch (error) {
      console.error("Error updating table: ", error);
    }
  };

  const handleDeleteTable = async (id: string) => {
    try {
      const tableDoc = doc(db, "tables", id);
      await deleteDoc(tableDoc);
      setTables(tables.filter((table) => table.id !== id));
    } catch (error) {
      console.error("Error deleting table: ", error);
    }
  };

  const resetForm = () => {
    setNumber("");
    setSeats("");
    setIsReserved(false);
    setEditingTable(null);
    setSelectedClientId("");
  };

  useEffect(() => {
    fetchTables();
    fetchClients();
  }, []);

  useEffect(() => {
    if (editingTable) {
      setNumber(editingTable.number);
      setSeats(editingTable.seats);
      setIsReserved(editingTable.isReserved);
      setSelectedClientId(editingTable.clientId || "");
    } else {
      resetForm();
    }
  }, [editingTable]);

  return (
    <main className="flex max-h-full w-full gap-4 p-4">
      <form className="flex h-fit w-3/5 flex-col gap-6 rounded-lg bg-content1 p-6">
        <div className="flex gap-4">
          <Input
            type="number"
            min={0}
            pattern="[0-9]"
            inputMode="numeric"
            label="Número da Mesa"
            labelPlacement="outside"
            radius="sm"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            startContent={
              <Hash className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
            }
          />

          <Input
            type="number"
            max={6}
            min={0}
            pattern="[0-9]"
            inputMode="numeric"
            label="Assentos"
            labelPlacement="outside"
            radius="sm"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
            startContent={
              <Chair className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
            }
          />
        </div>

        <div className="flex min-h-14 items-center justify-between gap-4">
          <Switch
            size="sm"
            isSelected={isReserved}
            onChange={(e) => setIsReserved(e.target.checked)}
          >
            Reservada?
          </Switch>

          {isReserved && (
            <Select
              label="Selecione um Cliente"
              radius="sm"
              selectedKeys={[selectedClientId]}
              onChange={(e) => setSelectedClientId(e.target.value)}
            >
              {clients.map((client) => (
                <SelectItem key={client.id} value={client.id}>
                  {client.name}
                </SelectItem>
              ))}
            </Select>
          )}
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <Button
            color="primary"
            size="lg"
            radius="sm"
            fullWidth
            onClick={
              editingTable
                ? () => handleUpdateTable(editingTable.id)
                : handleAddTable
            }
          >
            {editingTable ? "Atualizar" : "Cadastrar"}
          </Button>

          <Button fullWidth size="sm" onClick={resetForm}>
            Limpar
          </Button>
        </div>
      </form>

      <Table isStriped className="flex max-h-[600px] flex-grow">
        <TableHeader>
          <TableColumn>Nº</TableColumn>
          <TableColumn>ASSENTOS</TableColumn>
          <TableColumn>RESERVADA?</TableColumn>
          <TableColumn>AÇÕES</TableColumn>
        </TableHeader>

        <TableBody
          emptyContent={<Spinner label="Carregando..." color="primary" />}
        >
          {tables.map((table) => (
            <TableRow key={table.id}>
              <TableCell>{table.number}</TableCell>
              <TableCell>{table.seats}</TableCell>
              <TableCell className="text-xs">
                {table.isReserved ? (
                  <>
                    {table.clientId ? (
                      clients.find((client) => client.id === table.clientId)
                        ?.name || (
                        <Chip color="warning" size="sm" variant="flat">
                          Cliente não encontrado
                        </Chip>
                      )
                    ) : (
                      <Chip color="danger" size="sm" variant="flat">
                        Cliente não atribuído
                      </Chip>
                    )}
                  </>
                ) : (
                  <Chip color="success" size="sm" variant="flat">
                    Não
                  </Chip>
                )}
              </TableCell>
              <TableCell>
                <div className="relative flex items-center gap-2">
                  <Tooltip content="Editar">
                    <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                      <Pencil onClick={() => setEditingTable(table)} />
                    </span>
                  </Tooltip>
                  <Tooltip color="danger" content="Deletar">
                    <span className="cursor-pointer text-lg text-danger active:opacity-50">
                      <Trash onClick={() => handleDeleteTable(table.id)} />
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
