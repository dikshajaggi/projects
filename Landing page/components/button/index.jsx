import React from "react";
import "./Button1.css";

function Button1(props) {
  const { className } = props;

  return (
    <div className={`button-1 ${className || ""}`}>
      <div className="overlap-group2-3">
        <div className="join valign-text-middle roboto-medium-black-40px">JOIN</div>
      </div>
    </div>
  );
}

export default Button1;
