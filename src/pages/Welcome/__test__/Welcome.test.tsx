jest.mock('@images/welcome.jpg');

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Welcome } from "@pages/Welcome";

test("verifica se o botão de redirecionamento para a página de login está presente na tela", () => {
  // Renderiza o componente Welcome dentro de um MemoryRouter para lidar com a navegação
  const { getByRole } = render(
    <MemoryRouter>
      <Welcome />
    </MemoryRouter>
  );

  // Verifica se o botão está presente na tela pelo seu papel de botão (role="button")
  const loginButton = getByRole("button");

  // Verifica se o botão foi encontrado
  expect(loginButton).toBeInTheDocument();
});
