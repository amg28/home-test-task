import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "../src/components/Layout";

test("renders navigation bar and children components", () => {
  render(
    <MemoryRouter>
      <Layout>
        <div>Test Content</div>
      </Layout>
    </MemoryRouter>
  );

  expect(screen.getByText("Config")).toBeInTheDocument();
  expect(screen.getByText("Result")).toBeInTheDocument();
  expect(screen.getByText("Test Content")).toBeInTheDocument();
});
