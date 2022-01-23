import React from "react";
import { render, screen } from "@testing-library/react";
import Radio from "./Radio";

const props = {
  id: "orientation_portrait",
  name: "orientatiion",
  children: "Portrait",
  value: "portrait",
  register: jest.fn(),
};
test("renders radio", () => {
  render(<Radio {...props} />);
  expect(screen.getByTestId("radio")).toBeInTheDocument();
});

test("should render label", () => {
  render(<Radio {...props} />);
  expect(screen.getByTestId("radio-label").textContent).toContain("Portrait");
});

test("label should have class peer-cheecked:text-gray-500", () => {
  render(<Radio {...props} />);
  expect(screen.getByTestId("radio-label")).toHaveClass("peer-checked:text-gray-500");
});
