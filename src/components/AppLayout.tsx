import Header from "./Header";
import { Outlet } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

const AppLayout = () => (
  <Provider store={appStore}>
    <div className="mb-4">
      <div className="mb-40 sm:mb-28">
        <Header />
      </div>
      <Outlet />
    </div>
  </Provider>
);

export default AppLayout;
