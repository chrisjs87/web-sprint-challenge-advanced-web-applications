import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";

// jest.mock(I would mock my axios function service here)

test("Renders without errors", () => {
  render(<BubblePage />);
});

//async would be inserted before the anonymous function below
test("Renders appropriate number of colors passed in through mock", () => {
  //Keep in mind that our service is called on mount for this component.
  render(<BubblePage />);
  // {some mocked function that I started mocking about, like fetchColorService}.mockResolvedValueOnce({
  //     data:[
  //         {
  //             color: "aliceblue1",
  //             code: { hex: "#f0f8ff" },
  //             id: 1,
  //         },
  //         {
  //             color: "aliceblue2",
  //             code: { hex: "#f0f8ff" },
  //             id: 2,
  //         },
  //         {
  //             color: "aliceblue3",
  //             code: { hex: "#f0f8ff" },
  //             id: 3,
  //         },
  //     ]
  // })

  // await waitFor(() => {
  //     const listedColors = screen.queryAllByTestId(A test Id would need to be added to the div called container in bubble page)
  //     expect(listedColors).toHaveLength(3)
  // })
});
