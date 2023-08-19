import { createSlice } from "@reduxjs/toolkit";

const openDropdownSlice = createSlice({
  name: "openDropdown",

  initialState: {
    isOpenArray: [],
  },

  reducers: {
    toggleDropdown: (state, action) => {
      const rowIndex = action.payload;
      state.isOpenArray[rowIndex] = !state.isOpenArray[rowIndex];
    },

    setDropdown: (state, action) => {
      const value = action.payload;
      state.isOpenArray = state.isOpenArray.map((item) => value);
    },
  },
});

export const { toggleDropdown, setDropdown } = openDropdownSlice.actions;

export default openDropdownSlice.reducer;
