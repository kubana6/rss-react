import React from "react";
import { render, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("renders headline", () => {
    render(<Checkbox onChange={() => {}} checked />);

    screen.debug();
  });
});
