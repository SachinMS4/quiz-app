import React from "react";

function MCQ({ choices, queTitle }) {
  return (
    <div>
      <h2>{queTitle}</h2>
      {choices.map((choice, i) => (
        <div key={i}>
          <input type="radio" value={choice} name="choice" />
          {choice}
        </div>
      ))}
    </div>
  );
}

export default MCQ;
