import { useSelector } from "react-redux";
import MenuItemsBody from "./MenuItemsBody";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store: any) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    //dispatch an action to clear the Cart
    dispatch(clearCart());
  };

  return (
    <div>
      <div className="mx-2 sm:m-auto flex items-center mt-4 p-4 bg-gray-200 font-semibold rounded-lg sm:w-4/6 m-auto">
        <h1 className="flex-1 text-2xl">Cart Items</h1>
        <button
          className="p-2 m-2 text-green-600 border border-green-600 rounded-md hover:bg-green-600 hover:text-white transition"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className="mx-2 sm:mx-auto sm:w-4/6  mt-6 bg-gray-100 p-4 rounded-lg">
        {cartItems.length === 0 ? (
          <h2 className="text-center mt-4 py-4 text-xl font-semibold rounded-lg w-2/6 m-auto whitespace-nowrap">
            Your Cart is Empty
          </h2>
        ) : (
          <MenuItemsBody items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
