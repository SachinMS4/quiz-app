import React, { useState } from "react";

function MAQ({ choices, queTitle }) {
  console.log(choices.length);
  const [checkedState, setCheckedState] = useState(
    Array(choices.length).fill(false)
  );

  const handleCheckBox = (option) => {
    const currentState = checkedState.map((item, i) =>
      i === option ? !item : item
    );
    setCheckedState(currentState);
  };
  console.log(checkedState);

  return (
    <div>
      <h2>{queTitle}</h2>
      {choices.map((choice, i) => (
        <div key={i}>
          <input
            type="checkbox"
            id="option"
            value={choice}
            name="choice"
            checked={checkedState[i]}
            onChange={() => handleCheckBox(i)}
          />
          {choice}
        </div>
      ))}
    </div>
  );
}

export default MAQ;
