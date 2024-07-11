import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let existingProduct = state.items.some(
        (item) => item.id === action.payload.id
      );
      console.log(existingProduct);
      if (existingProduct) {
        state.items.map((item) => {
          if (item.id === action.payload.id) {
            item.qty += 1;
            // item.total += item.price;
          } else if (!item.id === action.payload.id) {
            state.items.push(action.payload);
            state.total += 1;
          }
        });
      } else {
        state.items.push(action.payload);
        state.total += 1;
      }
    },
    increaseQuantity: (state, action) => {
      state.items = state.items.map((item) => {
        // console.log("item id", item.id);
        // console.log("action-id", action.payload);
        if (item.id === action.payload) {
          return {
            ...item,
            qty: item.qty + 1
          };
        } else {
          return item;
        }
      });
    },
    decreaseQuantity: (state, action) => {
      // if qty = 1, when user click decrease remove product from shopping cart
      console.log("decrease id", action.payload);
      state.items = state.items.map((item) => {
        if (item.id === action.payload && item.qty === 1) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        } else if (item.id === action.payload && item.qty > 1) {
          state.items = state.items.map((item) =>
            item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
          );
        }
      });
    },
    removeAll: () => {}
  }
});

// export action
export const { addToCart, removeAll, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
// export reducer
export default cartSlice.reducer;
