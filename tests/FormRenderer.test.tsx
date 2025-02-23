import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import FormRenderer, { FormConfig } from "../src/components/FormRenderer";

const formConfig: FormConfig = {
  title: "Test Form",
  fields: [
    { name: "username", type: "string", label: "Username", required: true },
    { name: "age", type: "numeric", label: "Age", required: true },
  ],
  buttons: ["Submit"],
};

test("renders form fields and handles submission", () => {
  const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

  render(<FormRenderer config={formConfig} />);

  // Check if form title is rendered
  expect(screen.getByText("Test Form")).toBeInTheDocument();

  // Check if form fields are rendered
  expect(screen.getByLabelText("Username")).toBeInTheDocument();
  expect(screen.getByLabelText("Age")).toBeInTheDocument();

  // Fill out the form
  fireEvent.change(screen.getByLabelText("Username"), {
    target: { value: "John" },
  });
  fireEvent.change(screen.getByLabelText("Age"), { target: { value: "30" } });

  // Submit the form
  fireEvent.click(screen.getByText("Submit"));

  // Check if form submission alert is shown
  expect(alertMock).toHaveBeenCalledWith(
    'Form Submitted: {"username":"John","age":30}'
  );

  alertMock.mockRestore();
});
