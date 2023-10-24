import SearchTerm from "@/components/searchTerm/searchTerm";
import { render, screen } from "@testing-library/react";

describe("render components correctly", () => {
  it("should have title text", async () => {
    render(<SearchTerm />);

    const element = screen.getByText("Tabela Fipe");

    expect(element).toBeInTheDocument();
  });

  it("should have subtitle text", async () => {
    render(<SearchTerm />);

    const element = screen.getByText(
      "Consulte o preço de um veiculo de forma gratuíta"
    );

    expect(element).toBeInTheDocument();
  });

  it("should have select brand", async () => {
    render(<SearchTerm />);

    const element = screen.getByTestId("Marca");

    expect(element).toBeInTheDocument();
  });

  it("should have select model", async () => {
    render(<SearchTerm />);

    const element = screen.getByTestId("Modelo");

    expect(element).toBeInTheDocument();
  });

  it("should have button search", async () => {
    render(<SearchTerm />);

    const element = screen.getByText("Consultar Preço");

    expect(element).toBeInTheDocument();
  });
});
