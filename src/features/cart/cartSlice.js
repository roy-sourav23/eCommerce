import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  uniqueIDs: [],
};

const cardSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addedToCart: (state, action) => {
      const foundObject = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (!foundObject) {
        state.products.push(action.payload);
        state.uniqueIDs.push(action.payload.id);
      } else if (foundObject) {
        foundObject.quantity += 1;
      }
    },
    removedFromCart: (state, action) => {
      // console.log("action", action.payload);

      const foundObject = state.products.find(
        (product) => product.id === action.payload
      );

      if (foundObject) {
        state.products = state.products.filter(
          (product) => product.id != action.payload
        );
        state.uniqueIDs = state.uniqueIDs.filter((id) => id != action.payload);
      }
    },
    updatedQuantity: (state, action) => {
      const foundObject = state.products.find(
        (product) => product.id === action.payload.itemID
      );
      if (foundObject) {
        foundObject.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addedToCart, removedFromCart, updatedQuantity } =
  cardSlice.actions;
export default cardSlice.reducer;
