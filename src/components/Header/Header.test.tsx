import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { MemoryRouter } from "react-router";

describe("Header", () => {
  it("renders headline", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    screen.debug();
  });
});
