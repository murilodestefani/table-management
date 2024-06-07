import { render, screen, fireEvent } from "@testing-library/react";
import { Clients } from "@components/Clients";

test("renderiza campos de entrada para nome e telefone", () => {
  render(<Clients />);
  
  // Verifica se os campos de entrada para nome e telefone estão presentes
  const nameInput = screen.getByLabelText(/Nome do Cliente/i);
  const telephoneInput = screen.getByLabelText(/Telefone do Cliente/i);
  expect(nameInput).toBeInTheDocument();
  expect(telephoneInput).toBeInTheDocument();
  
  // Simula a inserção de texto nos campos de entrada
  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(telephoneInput, { target: { value: "123456789" } });
  
  // Verifica se o texto foi inserido corretamente nos campos de entrada
  expect(nameInput).toHaveValue("John Doe");
  expect(telephoneInput).toHaveValue("123456789");
});
