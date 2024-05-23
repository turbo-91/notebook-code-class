import { render, screen } from "@testing-library/react";
import Movie from "./Movie";

test("render a movie", () => {
  render(<Movie name="The Matrix" />);

  //   const matrixHeading = screen.getByText("The Matrix");
  const matrixHeading = screen.getByRole("heading", {
    name: "The Matrix",
  });
  expect(matrixHeading).toBeInTheDocument();
});
