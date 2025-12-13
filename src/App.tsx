import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Body from "./components/Body";
import Cart from "./components/Cart";

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
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<RouterProvider router={appRouter} />);
