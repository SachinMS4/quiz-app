import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { startPage: true, endPage: false, quesPage: false },
};

const navigationSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    changeNav: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { changeNav } = navigationSlice.actions;

export default navigationSlice.reducer;
