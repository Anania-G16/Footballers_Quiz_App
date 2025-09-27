import React from "react";
import ReactDOM from "react-dom";
// import beckham from "../assets/beckham.jpg";

function Question(props) {
  return (
    <div className="question">
      <img src={`/images/p${props.n}.jpg`} alt="becks" />
    </div>
  );
}

export default Question;
