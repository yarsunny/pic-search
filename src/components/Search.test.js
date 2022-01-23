import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "./Search";

const props = {
  query: "searh",
  onChangeQuery: jest.fn(),
};
test("renders search", () => {
  render(<Search {...props} />);
  expect(screen.getByTestId("search-input")).toBeInTheDocument();
});
