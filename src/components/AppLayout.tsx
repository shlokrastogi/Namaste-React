import Header from "./Header";
import Body from "./Body";
import { RestaurantType } from "../types/restaurant";

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

export default AppLayout;
