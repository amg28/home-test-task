import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ConfigEditor from "../src/components/ConfigEditor";

test("updates JSON input state", () => {
  const setJsonInput = jest.fn();
  render(<ConfigEditor jsonInput="{}" setJsonInput={setJsonInput} />);

  const textarea = screen.getByRole("textbox");
  fireEvent.change(textarea, { target: { value: '{"test": "value"}' } });

  expect(setJsonInput).toHaveBeenCalledWith('{"test": "value"}');
});
