import { createSlice } from "@reduxjs/toolkit";
import { data } from "../assets/data";

const initialState = {
  value: data.map((item, i) => {
    return { id: i, ...item, userAnswer: [] };
  }),
};

console.log(initialState.value);

const quizSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    getQuestions: (state) => {
      state = "hello";
    },
    userAnswer: (state, action) => {
      state = action.payload;
    },
  },
});

export const { getQuestions } = quizSlice.actions;

export default quizSlice.reducer;
