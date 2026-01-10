import { render, screen } from "@testing-library/react";
import RestaurantCard from "../src/components/RestaurantCard";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import MOCK_RESTAURANT_DATA from "../mocks/resCardMock.json";
import { RestaurantType } from "../src/types/restaurant";
import { withPromotedLabel } from "../src/components/RestaurantCard";

const resCard: RestaurantType =
  MOCK_RESTAURANT_DATA as unknown as RestaurantType;

describe("Restaurant Component Test Cases", () => {
  test("Should render the restaurant card component with props data", () => {
    render(
      <MemoryRouter>
        <RestaurantCard restaurant={resCard} />
      </MemoryRouter>
    );

    const restaurantName = screen.getByText("Theobroma");
    expect(restaurantName).toBeInTheDocument();
  });

  it("Should render the RestaurantCard with promoted badge", () => {
    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
    render(
      <MemoryRouter>
        <PromotedRestaurantCard restaurant={resCard} />
      </MemoryRouter>
    );

    const promotedBadge = screen.getByText("Promoted");
    expect(promotedBadge).toBeInTheDocument();
  });
});
