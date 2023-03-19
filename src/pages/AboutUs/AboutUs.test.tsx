import React from "react";
import { render, screen } from "@testing-library/react";
import { AboutUs } from "./AboutUs";

describe("About Us", () => {
  it("renders headline", () => {
    render(<AboutUs />);

    screen.debug();
  });
});
