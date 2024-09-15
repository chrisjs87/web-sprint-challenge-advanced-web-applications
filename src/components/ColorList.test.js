import React from "react";
import { render, screen } from "@testing-library/react";
import ColorList from "./ColorList";

const testColorList = [
  {
    color: "aliceblue1",
    code: { hex: "#f0f8ff" },
    id: 1,
  },
  {
    color: "aliceblue2",
    code: { hex: "#f0f8ff" },
    id: 2,
  },
  {
    color: "aliceblue3",
    code: { hex: "#f0f8ff" },
    id: 3,
  },
];

test("Renders an empty list of colors without errors", () => {
  render(<ColorList colors={[]} />);
});

test("Renders a list of colors without errors", () => {
  render(<ColorList colors={testColorList} />);
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
  const { rerender } = render(
    <ColorList editing={true} colors={testColorList} />
  );

  const editMenu = screen.queryByTestId("editMenu");

  expect(editMenu).toBeInTheDocument();

  rerender(<ColorList editing={false} colors={testColorList} />);

  expect(editMenu).not.toBeInTheDocument();
});
