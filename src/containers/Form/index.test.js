import { render, screen } from "@testing-library/react";
import Form from "./index";

describe("Form create", () => {
  it("Fields create", async () => {
    render(<Form />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

});
