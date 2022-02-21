import React from "react";
import "../styles/QuizQuestion.css";
import { useSelector } from "react-redux";

import FITB1 from "./switchTypes/FITB1";
import FITB2 from "./switchTypes/FITB2";
import MAQ from "./switchTypes/MAQ";
import MCQ from "./switchTypes/MCQ";
import MTF from "./switchTypes/MTQ";

function QuizQuestion({ setCurQue, curQue, endPage }) {
  const questions = useSelector((state) => state.quiz.value);
  const question = questions[curQue];

  if (endPage) {
    setCurQue(0);
  }

  const queTitle = question.question.includes("{}")
    ? question.question.split("{}").join(" _______ ")
    : question.question;

  function renderSwitch(type = "MSQ") {
    switch (type) {
      case "FITB1":
        return <FITB1 queTitle={queTitle} id={question.id} />;
      case "FITB2":
        return <FITB2 queTitle={queTitle} id={question.id} />;
      case "MAQ":
        return (
          <MAQ
            queTitle={queTitle}
            choices={question.answer_choices}
            id={question.id}
          />
        );
      case "MCQ":
        return (
          <MCQ
            queTitle={queTitle}
            choices={question.answer_choices}
            id={question.id}
          />
        );
      case "MTF":
        return (
          <MTF
            queTitle={queTitle}
            options={question.answer_options}
            id={question.id}
          />
        );
      default:
        return (
          <h3 style={{ color: "red" }}>
            There is a problem with displaying question
          </h3>
        );
    }
  }

  return (
    <div className="question-container">
      {renderSwitch(question.type)}

      <div className="buttons">
        {curQue !== 0 ? (
          <button onClick={() => setCurQue(curQue - 1)}>Previous</button>
        ) : null}

        {curQue !== questions.length - 1 ? (
          <button onClick={() => setCurQue(curQue + 1)}>Next</button>
        ) : null}
      </div>
    </div>
  );
}

export default QuizQuestion;
