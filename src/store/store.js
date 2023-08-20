import { configureStore } from "@reduxjs/toolkit";
import OpenDropdownSlice from "./OpenDropdownSlice";
import rowApiSlice from "./rowApiSlice";
const store = configureStore({
  reducer: {
    openDropdown: OpenDropdownSlice,
    rowApi: rowApiSlice,
  },
});

export default store;
