import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Select from "./Select";

describe("Select", () => {
  const options = {
    option1: "Option 1",
    option2: "Option 2",
    option3: "Option 3",
  };
  const label = "Select an option";
  const defaultValue = "Select an option";
  const name = "test-select";
  const onChange = jest.fn();

  //   it("renders the label correctly", () => {
  //     render(
  //       <Select
  //         label={label}
  //         options={options}
  //         defaultValue={defaultValue}
  //         name={name}
  //         onChange={onChange}
  //       />
  //     );
  //     const labelElement = screen.getByText(label);
  //     expect(labelElement).toBeInTheDocument();
  //   });

  it("renders all options correctly", () => {
    render(
      <Select
        label={label}
        options={options}
        defaultValue={defaultValue}
        name={name}
        onChange={onChange}
      />
    );
    Object.values(options).forEach((option) => {
      const optionElement = screen.getByText(option);
      expect(optionElement).toBeInTheDocument();
    });
  });

  it("calls the onChange function when an option is selected", () => {
    render(
      <Select
        label={label}
        options={options}
        defaultValue={defaultValue}
        name={name}
        onChange={onChange}
      />
    );
    const selectElement = screen.getByRole("combobox");
    userEvent.selectOptions(selectElement, "option1");
    expect(onChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
