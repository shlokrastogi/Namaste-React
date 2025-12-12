import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
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
    path: "/about",
    element: <About />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<RouterProvider router={appRouter} />);
