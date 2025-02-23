import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Config from "../src/pages/Config";

test("renders new field in config", () => {
  render(
    <MemoryRouter>
      <Config />
    </MemoryRouter>
  );

  const textarea = screen.getByRole("textbox");
  fireEvent.change(textarea, {
    target: {
      value:
        '{"title": "Test", "fields": [{"name": "newField", "type": "string", "label": "New Field", "required": true}]}',
    },
  });

  const button = screen.getByText("Generate form");
  fireEvent.click(button);

  expect(localStorage.getItem("formJsonConfig")).toContain(
    '{"name": "newField", "type": "string", "label": "New Field", "required": true}'
  );
});
