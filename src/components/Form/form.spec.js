import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
  it("submits the form with the correct query parameters", () => {
    const setQuery = jest.fn();

    render(<Form setQuery={setQuery} />);

    // Fill in the form fields
    fireEvent.change(screen.getByPlaceholderText(/eg.906468196730134/i), {
      target: { value: "12345" },
    });

    // Submit the form
    fireEvent.click(screen.getByText(/Search Logger/i));

    // Check that the setQuery function was called with the correct query parameters
    expect(setQuery).toHaveBeenCalledWith([{ key: "logId", value: "12345" }]);
  });
});
