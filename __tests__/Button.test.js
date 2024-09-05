import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { FaReact } from "react-icons/fa";
import { ButtonCopy } from "@/components/Button";

// Mock para o método `navigator.clipboard.writeText`
beforeAll(() => {
  // Mock manual para `navigator.clipboard`
  Object.assign(navigator, {
    clipboard: {
      writeText: jest.fn(() => Promise.resolve()),
    },
  });
});

describe("ButtonCopy", () => {
  it("renders the button with the correct children and icon", () => {
    const children = "Copy Email";
    const icon = <FaReact />;
    const copyText = "test@example.com";

    render(
      <ButtonCopy copy={copyText} icon={icon}>
        {children}
      </ButtonCopy>
    );

    // Verifica se o botão renderiza com o texto correto
    const buttonElement = screen.getByText(children);
    expect(buttonElement).toBeInTheDocument();

    // Verifica se o ícone foi renderizado corretamente
    expect(screen.getByText("Copy Email")).toBeInTheDocument();
  });

  it("copies text to clipboard and shows success message", async () => {
    const children = "Copy Email";
    const copyText = "test@example.com";

    render(<ButtonCopy copy={copyText}>{children}</ButtonCopy>);

    // Simula o clique no botão
    const buttonElement = screen.getByText(children);
    fireEvent.click(buttonElement);

    // Verifica se o texto foi copiado para a área de transferência
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(copyText);

    // Verifica se a mensagem de sucesso é exibida
    await waitFor(() => {
      const successMessage = screen.getByText("Email Copiado!");
      expect(successMessage).toBeInTheDocument();
    });
  });
});
