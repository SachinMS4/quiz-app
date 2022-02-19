import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./quizSlice";
import navigationReducer from "./navigationSlice";

export const store = configureStore({
  reducer: {
    quiz: questionReducer,
    nav: navigationReducer,
  },
});
