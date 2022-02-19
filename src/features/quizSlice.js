import { createSlice } from "@reduxjs/toolkit";
import { data } from "../assets/data";

const initialState = {
  value: data.map((item, i) => {
    return { id: i, ...item, userAnswer: [] };
  }),
};

const quizSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    getQuestions: (state) => {
      state = "hello";
    },
    userAnswers: (state, action) => {
      const index = action.payload.id;
      const [item] = state.value.filter((que) => que.id === index);
      state.value[index].userAnswer = action.payload.userAnswer;
      console.log(action.payload);
    },
  },
});

export const { userAnswers } = quizSlice.actions;

export default quizSlice.reducer;
