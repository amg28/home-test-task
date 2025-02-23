import React from "react";
import { render, screen } from "@testing-library/react";
import Result from "../src/pages/Result";

test("retrieves and renders form configuration from local storage", () => {
  const formConfig = {
    title: "Test Form",
    fields: [
      { name: "username", type: "string", label: "Username", required: true },
    ],
    buttons: ["Submit"],
  };
  localStorage.setItem("formJsonConfig", JSON.stringify(formConfig));

  render(<Result />);

  expect(screen.getByText("Test Form")).toBeInTheDocument();
  expect(screen.getByLabelText("Username")).toBeInTheDocument();
});

test("renders new field in result", () => {
  const formConfig = {
    title: "Test Form",
    fields: [
      { name: "newField", type: "string", label: "New Field", required: true },
    ],
    buttons: ["Submit"],
  };
  localStorage.setItem("formJsonConfig", JSON.stringify(formConfig));

  render(<Result />);

  expect(screen.getByLabelText("New Field")).toBeInTheDocument();
});
