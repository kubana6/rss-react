import React from "react";
import { render, screen } from "@testing-library/react";
import { ErrorPage } from "./ErrorPage";

describe("ErrorPage", () => {
  it("renders headline", () => {
    render(<ErrorPage />);

    screen.debug();
  });
});
