import React from "react";
import { render, screen } from "@testing-library/react";
import { UserCard } from "./UserCard";

describe("UserCard", () => {
  it("renders headline", () => {
    render(
      <UserCard
        lastName="'fgeg"
        firstName="sdg"
        avatar="https://picsum.photos/id/241/300/200"
        country="Belarus"
        birthDay="01-01-2001"
        gender="Man"
      />
    );

    screen.debug();
  });
});
