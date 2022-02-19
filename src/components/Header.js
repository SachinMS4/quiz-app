import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeNav } from "../features/navigationSlice";
import "../styles/header.css";
import Timer from "./Timer";

const Header = () => {
  const [disTimer, setDisTimer] = useState(false);
  const [buttonName, setbuttonName] = useState("Start");

  const dispatch = useDispatch();

  function clickHandler() {
    let name = "";
    if (buttonName === "Start") {
      name = "Submit";
      setDisTimer(true);
    } else if (buttonName === "Submit") {
      name = "Retry";
      setDisTimer(false);
    } else {
      name = "Start";
      setDisTimer(false);
    }
    setbuttonName(name);
  }
  useEffect(() => {
    if (buttonName === "Submit") {
      return dispatch(
        changeNav({ startPage: false, endPage: false, quesPage: true })
      );
    } else if (buttonName === "Start") {
      return dispatch(
        changeNav({ startPage: true, endPage: false, quesPage: false })
      );
    } else {
      return dispatch(
        changeNav({ startPage: false, endPage: true, quesPage: false })
      );
    }
  });

  return (
    <header>
      <h1>Quiz App</h1>
      {disTimer ? <Timer /> : null}
      <button className="header-button" onClick={clickHandler}>
        {buttonName}
      </button>
    </header>
  );
};

export default Header;
