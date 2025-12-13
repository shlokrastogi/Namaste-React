import Header from "./Header";
import Body from "./Body";
import { RestaurantType } from "../types/restaurant";
import { Outlet } from "react-router-dom";

const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
  </div>
);

export default AppLayout;
