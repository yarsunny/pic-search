import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Filters from "./Filters";

const defaultValues = {
  order_by: "relevant",
  color: "any",
  orientation: "any",
};

const mockOnClearFilters = jest.fn();
const mockOnChangeFilters = jest.fn();

const hide = ["order_by", "color"];

test("renders filters", () => {
  render(
    <Filters
      defaultValues={defaultValues}
      onChangeFilters={mockOnChangeFilters}
      onClearFilters={mockOnClearFilters}
      hide={hide}
    />
  );
  expect(screen.getByTestId("filters")).toBeInTheDocument();
});

test("should hide sort by filters when hide param includes order_by", () => {
  render(
    <Filters
      defaultValues={defaultValues}
      onChangeFilters={mockOnChangeFilters}
      onClearFilters={mockOnClearFilters}
      hide={hide}
    />
  );
  expect(screen.queryByTestId("sortby-filters")).not.toBeInTheDocument();
});

test("should show 3 filter types when hide=[]", () => {
  const hide = [];
  render(
    <Filters
      defaultValues={defaultValues}
      onChangeFilters={mockOnChangeFilters}
      onClearFilters={mockOnClearFilters}
      hide={hide}
    />
  );
  expect(screen.getByTestId("filters-form").childNodes.length).toBe(3);
});

test("should call onClearFilters on clicking clear filters button", () => {
  render(
    <Filters
      defaultValues={defaultValues}
      onChangeFilters={mockOnChangeFilters}
      onClearFilters={mockOnClearFilters}
      hide={hide}
    />
  );

  const clearFiltersButton = screen.getByTestId("clear-filters-btn");

  fireEvent.click(clearFiltersButton);
  expect(mockOnClearFilters).toBeCalled();
});
