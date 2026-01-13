import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: any[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<any>) => {
      //Mutating (directly modifying) the state over here
      //Redux Toolkit uses Immer library internally to handle immutability
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((_, index) => index !== action.payload);
    },
    clearCart: (state) => {
      //RTK - either we can return new state or we can mutate the existing state
      // state.items.length = 0;
      //return { items: []}
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
export const selectTotalItems = (state: any) => state.cart.items.length;
