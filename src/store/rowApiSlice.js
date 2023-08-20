import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customAxios from "../components/customAxios/axios";
export const fetchRowApi = createAsyncThunk("rowApi/fetchRowApi", async () => {
  const response = await customAxios("/rows");
  console.log(response, "response");

  return response.data;
});

const rowApiSlice = createSlice({
  name: "rowApi",
  initialState: {
    rows: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchRowApi.pending]: (state) => {
      state.status = "loading";
    },
    [fetchRowApi.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.rows = action.payload;
    },
    [fetchRowApi.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default rowApiSlice.reducer;
