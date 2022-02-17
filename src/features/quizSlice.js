import { createSlice } from "@reduxjs/toolkit";
import { data } from "../assets/data";

const initialState = {
  value: data,
};

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
