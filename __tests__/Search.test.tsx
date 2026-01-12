import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../src/components/Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { MemoryRouter } from "react-router-dom";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(MOCK_DATA),
    } as Response)
  ) as jest.Mock;
});

afterEach(() => {
  jest.clearAllMocks();
});

it("should render restaurants after fetch", async () => {
  render(
    <MemoryRouter>
      <Body />
    </MemoryRouter>
  );

  // Example: adjust text based on your UI
  const cards = await screen.findAllByTestId("res-card");

  expect(cards.length).toBeGreaterThan(0);
});

it("should render the cards after search", async () => {
  render(
    <MemoryRouter>
      <Body />
    </MemoryRouter>
  );

  const searchInput = await screen.findByTestId("searchInput");

  const searchBtn = screen.getByRole("button", { name: "Search" });

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("res-card");

  expect(cards.length).toBe(1);
});

it("Should filter top rated restaurants when 'Top Rated' button is clicked", async () => {
  render(
    <MemoryRouter>
      <Body />
    </MemoryRouter>
  );

  await screen.findAllByTestId("res-card");

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedBtn);

  const cards = await screen.findAllByTestId("res-card");

  expect(cards.length).toBe(8);
});
