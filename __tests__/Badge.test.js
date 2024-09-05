import Badge from "@/components/Badge";
import { CMSIcon } from "@/components/cms-icon";
import { render, screen } from "@testing-library/react";

// Mock do CMSIcon para evitar problemas de renderização
jest.mock("@/components/cms-icon", () => ({
  CMSIcon: ({ icon }) => <div data-testid="cms-icon">{icon}</div>,
}));

describe("Badge", () => {
  it("renders the badge with the correct icon and children", () => {
    const icon = "FaReact";
    const children = "React Badge";

    render(<Badge icon={icon}>{children}</Badge>);

    // Verifica se o ícone foi renderizado corretamente
    const iconElement = screen.getByTestId("cms-icon");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveTextContent(icon);

    // Verifica se o conteúdo (children) está presente
    const childrenElement = screen.getByText(children);
    expect(childrenElement).toBeInTheDocument();
  });

  it("applies additional class names correctly", () => {
    const icon = "FaReact";
    const additionalClass = "custom-class";

    render(<Badge icon={icon} className={additionalClass} />);

    // Verifica se a classe adicional foi aplicada corretamente
    const badgeElement = screen.getByTestId("cms-icon").parentElement;
    expect(badgeElement).toHaveClass(additionalClass);
  });
});
