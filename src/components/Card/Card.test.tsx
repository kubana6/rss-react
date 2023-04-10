import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";
const mockData = {
  id: 1,
  title: "10 простых упражнений для утренней зарядки",
  image: "https://picsum.photos/id/237/300/200",
  views: 1024,
  likes: 256,
};

describe("Card", () => {
  it("renders headline", () => {
    render(<Card onClick={() => {}} {...mockData} />);

    screen.debug();
  });
});
