jest.mock('@images/restaurant.jpg');

import { render, screen } from "@testing-library/react";
import { Dashboard } from "@components/Dashboard";

test("renderiza o componente Dashboard com contagem de mesas e clientes", async () => {
  const mockTablesCount = 10;
  const mockClientsCount = 9;

  render(<Dashboard />);

  await screen.findByText(/Mesas Registradas/i);

  const tablesCountElement = screen.getByText(mockTablesCount.toString());
  expect(tablesCountElement).toBeInTheDocument();

  const clientsCountElement = screen.getByText(mockClientsCount.toString());
  expect(clientsCountElement).toBeInTheDocument();
});
