import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  test("renders a label, an input field, and an optional error message", () => {
    const placeholder = "eg.906468196730134";
    const defaultValue = "123455";
    render(
      <Input
        label="Log Id"
        type="text"
        defaultValue="123455"
        name="logId"
        onChange={() => {}}
        placeholder="eg.906468196730134"
      />
    );

    const inputElement = screen.getByPlaceholderText(placeholder);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(defaultValue);
  });
});
