import React from "react";
import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  it("renders headline", () => {
    render(<Input onChange={() => {}} value="hi" />);

    screen.debug();
  });
});
