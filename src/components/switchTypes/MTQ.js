import React, { useState } from "react";

import "../../styles/MTQ.css";

function MTQ({ options, queTitle, id }) {
  const [selected, setSelected] = useState(Array(options.length).fill(0));
  const [optionCount, setOptionCount] = useState(0);

  const handleClick = (selection) => {
    let item = [...selected];
    if (item[selection] === 0) {
      item[selection] = optionCount;
      setOptionCount(optionCount + 1);
    }
    setSelected(item);
  };

  const resetHandler = () => {
    setSelected(selected.fill(0));
    setOptionCount(1);
  };

  return (
    <div>
      <h2>{queTitle}</h2>
      <div>
        {options.map((option, i) => (
          <div key={i} className="options">
            <p className={`option${i + 1}`}>{option.State} </p>
            <p
              className={`option${selected[i]} option0`}
              onClick={() => handleClick(i)}>
              {option.Capital}
            </p>
          </div>
        ))}
      </div>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default MTQ;
