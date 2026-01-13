import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../src/components/RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/resMenuItems.json";
import { Provider } from "react-redux";
import appStore from "../src/utils/appStore";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "../src/components/Header";
import Cart from "../src/components/Cart";
import { selectTotalItems } from "../src/utils/cartSlice";

afterAll(() => {
  jest.clearAllMocks();
});

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(MOCK_DATA_NAME),
    } as Response)
  ) as jest.Mock;
});

describe("Cart Page Test Cases", () => {
  it("Should load Restaurant Menu Component", async () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter initialEntries={["/restaurant/123"]}>
          <Header />
          <Routes>
            <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const accordionHeader = await screen.findByText("Gifting (24)");
    fireEvent.click(accordionHeader);

    const items = await screen.findAllByTestId("foodItems");
    expect(items.length).toBe(24);

    const addBtn = screen.getAllByRole("button", { name: "Add +" });
    expect(addBtn.length).toBe(24);

    fireEvent.click(addBtn[0]);
    console.log("Added first item");
    fireEvent.click(addBtn[1]);
    console.log("Added second item");

    expect(selectTotalItems(appStore.getState())).toBe(2);

    const cartLink = await screen.findByRole("link", { name: /cart\s*2/i });
    expect(cartLink).toBeInTheDocument();

    fireEvent.click(cartLink);

    const clearBtn = screen.getByRole("button", { name: /clear cart/i });
    fireEvent.click(clearBtn);
    expect(selectTotalItems(appStore.getState())).toBe(0);

    expect(screen.getByText("Your Cart is Empty")).toBeInTheDocument();
  });
});
