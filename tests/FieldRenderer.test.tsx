import React from "react";
import { render, screen } from "@testing-library/react";
import FieldRenderer from "../src/components/form/FieldRenderer";
import { useForm, Controller } from "react-hook-form";

const RenderField: React.FC<{
  type: string;
  label: string;
  options?: string[];
}> = ({ type, label, options }) => {
  const { control } = useForm();
  return (
    <Controller
      name="testField"
      control={control}
      defaultValue={type === "date" ? options?.[0] : ""}
      render={({ field }) => (
        <FieldRenderer
          field={field}
          type={type}
          label={label}
          options={options}
        />
      )}
    />
  );
};

const renderField = (type: string, label: string, options?: string[]) => {
  render(<RenderField type={type} label={label} options={options} />);
};

test("renders string field", () => {
  renderField("string", "Test String");
  expect(screen.getByLabelText("Test String")).toBeInTheDocument();
});

test("renders numeric field", () => {
  renderField("numeric", "Test Numeric");
  expect(screen.getByLabelText("Test Numeric")).toBeInTheDocument();
});

test("renders multi-line field", () => {
  renderField("multi-line", "Test Multi-Line");
  expect(screen.getByLabelText("Test Multi-Line")).toBeInTheDocument();
});

test("renders boolean field", () => {
  renderField("boolean", "Test Boolean");
  expect(screen.getByLabelText("Test Boolean")).toBeInTheDocument();
});

test("renders date field", () => {
  const dateValue = new Date(2025, 1, 24);
  renderField("date", "Test Date", [dateValue.toISOString().split("T")[0]]);
  expect(screen.getByDisplayValue("2025-02-23")).toBeInTheDocument();
});

test("renders enum field", () => {
  renderField("enum", "Test Enum", ["Ostrava", "Brno"]);
  expect(screen.getByLabelText("Ostrava")).toBeInTheDocument();
  expect(screen.getByLabelText("Brno")).toBeInTheDocument();
});
