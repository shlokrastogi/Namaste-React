import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../src/components/Contact";

test("Should render Contact component", () => {
  render(<Contact />);

  const headingElement = screen.getByRole("heading");

  expect(headingElement).toBeInTheDocument();
});
