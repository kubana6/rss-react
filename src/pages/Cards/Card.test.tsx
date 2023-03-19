import React from "react";
import { render, screen } from "@testing-library/react";
import { Cards } from "./Cards";

describe("Cards", () => {
  it("renders headline", () => {
    render(<Cards />);

    screen.debug();
  });
});
