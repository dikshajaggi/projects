import React from "react";
import "./Rectangle1.css";

function Rectangle1(props) {
  const { src, className } = props;

  return <img className={`rectangle-2 ${className || ""}`} src={src} />;
}

export default Rectangle1;