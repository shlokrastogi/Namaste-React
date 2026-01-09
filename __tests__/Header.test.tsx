import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "../src/components/Header";
import appStore from "../src/utils/appStore";

describe("Header Component Test Cases", () => {
  test("Should render the login button", () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );

    // const buttonElement = screen.getByText("Login");

    // expect(buttonElement).toBeInTheDocument();

    //Good way to find the button with role
    const button = screen.getByRole("button", { name: "Login" });

    expect(button).toBeInTheDocument();
  });

  test("Should render the cart item", () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );

    const cartItem = screen.getByText(/Cart/); //Using Regex (/Cart/) to find text that contains "Cart"

    expect(cartItem).toBeInTheDocument();
  });

  test("Should test toggle feature of Login/Logout button onClick", () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    expect(logoutButton).toBeInTheDocument();
  });
});
