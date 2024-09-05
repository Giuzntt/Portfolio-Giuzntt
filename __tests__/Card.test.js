import { render, screen } from "@testing-library/react";

import { getRelativeTimeString } from "@/utils/get-relative-time-query";
import Card from "@/components/Card";
import { CMSIcon } from "@/components/cms-icon";

// Mock do CMSIcon para evitar problemas de renderização
jest.mock("@/components/cms-icon", () => ({
  CMSIcon: ({ icon, className }) => (
    <div data-testid="cms-icon" className={className}>
      {icon}
    </div>
  ),
}));

// Mock da função getRelativeTimeString
jest.mock("@/utils/get-relative-time-query", () => ({
  getRelativeTimeString: jest.fn(),
}));

describe("Card", () => {
  it("renders the card with correct skill, icon, and experience time", () => {
    const skill = "React";
    const time = "2022-01-01T00:00:00Z"; // Data de exemplo
    const icon = "FaReact";

    // Mock da função de tempo relativo para retornar um valor fixo
    getRelativeTimeString.mockReturnValue("há 2 anos");

    render(<Card skill={skill} time={time} icon={icon} />);

    // Verifica se o ícone foi renderizado corretamente
    const iconElement = screen.getByTestId("cms-icon");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveTextContent(icon);

    // Verifica se o título da habilidade está correto
    const skillElement = screen.getByRole("heading", { name: /react/i });
    expect(skillElement).toBeInTheDocument();

    // Verifica se o tempo de experiência está correto
    const experienceElement = screen.getByText(/2 anos de experiência/i);
    expect(experienceElement).toBeInTheDocument();
  });
});
