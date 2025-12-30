import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Body from "./components/Body";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";

//Chunking
//Lazy loading
//Code Chunking
//Dynamic Bundling
//OnDemand Loading
//Dynamic Import
const Grocery = lazy(() => import("./components/Grocery"));

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
      {
        path: "/grocery",
        element: (
          //Suspense prevents rendering breaks during async loading

          // A component loaded via React.lazy() is fetched asynchronously.
          // Without Suspense, React would have no way to handle the “loading gap” and the UI would break.
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<RouterProvider router={appRouter} />);
