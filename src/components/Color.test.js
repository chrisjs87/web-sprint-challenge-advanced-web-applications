import React from "react";
import { queryByTestId, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from "./Color";

const testColor = {
  color: "aliceblue",
  code: { hex: "#f0f8ff" },
  id: 1,
};

const testBlankColor = {
  color: "",
  code: {},
  id: "",
};

test("Renders without errors with blank color passed into component", () => {
  render(<Color color={testBlankColor} />);
});

test("Renders the color passed into component", () => {
  render(<Color color={testColor} />);

  const color = screen.queryByTestId("color");

  expect(color).toBeInTheDocument();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
  const mockDeleteColor = jest.fn();
  const mockToggleEdit = jest.fn();

  render(
    <Color
      color={testColor}
      toggleEdit={mockToggleEdit}
      deleteColor={mockDeleteColor}
    />
  );

  const icon = screen.queryByTestId("delete");

  userEvent.click(icon);

  expect(mockDeleteColor.mock.calls).toHaveLength(1);
  expect(mockToggleEdit.mock.calls).toHaveLength(1);
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
  const mockToggleEdit = jest.fn();
  const mockSetEditColor = jest.fn();

  render(
    <Color
      color={testColor}
      setEditColor={mockSetEditColor}
      toggleEdit={mockToggleEdit}
    />
  );

  const colorDiv = screen.queryByTestId("color");

  userEvent.click(colorDiv);

  expect(mockToggleEdit.mock.calls).toHaveLength(1);
  expect(mockSetEditColor.mock.calls).toHaveLength(1);
});
