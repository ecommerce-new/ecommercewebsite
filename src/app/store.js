import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../components/features/cartSlice";

export const store = configureStore({
  reducer: {
    allCart: cartSlice,
  },
});