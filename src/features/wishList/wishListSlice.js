import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const foundObject = state.find((obj) => obj.id === action.payload.id);
      if (!foundObject) {
        state.push(action.payload);
      }
    },
    removeFromWishList: (state, action) => {
      // console.log("action. payloa", action.payload);

      const foundObject = state.find((obj) => obj.id === action.payload);
      if (foundObject) {
        return state.filter((obj) => obj.id != action.payload);
      }
    },
  },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;

export default wishListSlice.reducer;
