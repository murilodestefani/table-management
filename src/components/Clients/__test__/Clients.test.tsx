import { render, screen, fireEvent } from "@testing-library/react";
import { Clients } from "@components/Clients";

test("renderiza campos de entrada para nome e telefone", () => {
  render(<Clients />);
  
  const nameInput = screen.getByLabelText(/Nome do Cliente/i);
  const telephoneInput = screen.getByLabelText(/Telefone do Cliente/i);
  expect(nameInput).toBeInTheDocument();
  expect(telephoneInput).toBeInTheDocument();
  
  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(telephoneInput, { target: { value: "123456789" } });
  
  expect(nameInput).toHaveValue("John Doe");
  expect(telephoneInput).toHaveValue("123456789");
});
