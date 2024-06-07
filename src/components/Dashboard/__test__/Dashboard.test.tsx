jest.mock('@images/restaurant.jpg');

import { render, screen } from "@testing-library/react";
import { Dashboard } from "@components/Dashboard";

test("renderiza o componente Dashboard com contagem de mesas e clientes", async () => {
  // Definindo contagens simuladas para mesas e clientes
  const mockTablesCount = 10;
  const mockClientsCount = 20;

  // Renderiza o componente Dashboard
  render(<Dashboard />);

  // Aguarda o carregamento dos dados
  await screen.findByText(/Mesas Cadastradas/i);

  // Verifica se o elemento de contagem de mesas está presente e possui o valor esperado
  const tablesCountElement = screen.getByText(mockTablesCount.toString());
  expect(tablesCountElement).toBeInTheDocument();

  // Verifica se o elemento de contagem de clientes está presente e possui o valor esperado
  const clientsCountElement = screen.getByText(mockClientsCount.toString());
  expect(clientsCountElement).toBeInTheDocument();
});
