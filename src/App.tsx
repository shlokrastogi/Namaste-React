import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ConatactUs from "./components/ContactUs";
import Error from "./components/Error";
/**
 * Header
 * -logo
 * -nav-items
 *
 * Body
 * -search
 * restaurant-container
 *    -res-card
 *     -img
 *     -res-name
 *     -cuisines
 *     -rating
 *     -delivery-time
 * restaurant-card
 *
 * Footer
 * -copyright
 * -links
 * -address
 */

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },

  {
    path: "/aboutUs",
    element: <AboutUs />,
  },

  {
    path: "/contactUs",
    element: <ConatactUs />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<RouterProvider router={appRouter} />);
