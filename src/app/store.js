import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../features/cart/cartSlice";
import wishListReducer from "../features/wishList/wishListSlice";
import authReducer from "../features/auth/AuthSlice";

export const store = configureStore({
  reducer: {
    cart: cardReducer,
    wishList: wishListReducer,
    auth: authReducer,
  },
});
