import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../src/components/Contact";

describe("Contact Page Test Cases", () => {
  // we can also use "it" in place of test to test our cases
  test("Should render Contact component", () => {
    render(<Contact />);

    const headingElement = screen.getByRole("heading");

    expect(headingElement).toBeInTheDocument();
  });

  it("Should test whether the form is present", () => {
    render(<Contact />);

    const form = screen.getByRole("form", { name: "contact-form" });

    expect(form).toBeInTheDocument();
  });

  test("should render that the button Submit is present", () => {
    render(<Contact />);

    const buttonElement = screen.getByText("Submit");

    expect(buttonElement).toBeInTheDocument();
  });

  test("Should Test whether the name input is present on the page", () => {
    render(<Contact />);

    const inputElement = screen.getByPlaceholderText("Name");

    expect(inputElement).toBeInTheDocument();
  });

  // test("Should render whether the form is present on the page", () => {
  //   render(<Contact />);

  //   const inputElement = screen.getByRole("textbox");

  //   console.log(inputElement);

  //   expect(inputElement).toBeInTheDocument();
  // });

  test("Should render whether the form is present on the page", () => {
    render(<Contact />);

    const inputElement = screen.getAllByRole("textbox");

    // console.log(inputElement.length);

    expect(inputElement.length).toBe(3);
  });

  test("Should render whether the form is present on the page", () => {
    render(<Contact />);

    const inputElement = screen.getAllByRole("textbox");

    // console.log(inputElement.length);

    expect(inputElement.length).not.toBe(2);
  });

  test("Should render whether the form is present on the page", () => {
    render(<Contact />);

    const inputElement = screen.getAllByRole("textbox");

    expect(inputElement).toHaveLength(3);

    // console.log(inputElement.length);
  });
});
