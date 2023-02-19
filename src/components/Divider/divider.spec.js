import { render } from "@testing-library/react";
import Divider from "./Divider";

describe("Divider component", () => {
  it("renders a div with class 'divider'", () => {
    const { container } = render(<Divider />);
    const div = container.firstChild;
    expect(div).toHaveClass("divider");
  });
});
