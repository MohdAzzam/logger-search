import { render, screen } from "@testing-library/react";
import Breadcrumb from "./Breadcrumb";

describe("Breadcrumb", () => {
  it("should render three breadcrumb items with text", () => {
    render(<Breadcrumb />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(3);
    expect(items[0]).toHaveTextContent("Home");
    expect(items[1]).toHaveTextContent("Administration");
    expect(items[2]).toHaveTextContent("Logger Search");
  });
});
