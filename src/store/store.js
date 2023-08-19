import { configureStore } from "@reduxjs/toolkit";
import OpenDropdownSlice from "./OpenDropdownSlice";
const store = configureStore({
  reducer: {
    openDropdown: OpenDropdownSlice,
  },
});

export default store;
