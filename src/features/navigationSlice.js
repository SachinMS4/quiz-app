import { createSlice } from "@reduxjs/toolkit";
import { data } from "../assets/data";

const totalTime = data.reduce((prev, item) => prev + item.time, 0);
const initialState = {
  value: [],
};

const navigationSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {},
});

export const {} = navigationSlice.actions;

export default navigationSlice.reducer;
