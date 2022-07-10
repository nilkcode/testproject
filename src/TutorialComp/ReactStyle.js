import React from "react";
import "../custome.css";

export default function ReactStyle(prop) {
  const h2 = {
    color: "green",
    fontSize: "50px",
    textAlign: "center",
    backgroundColor: "yellow",
  };
  const h3 = {
    color: "red",
    fontSize: "50px",
    textAlign: "center",
    backgroundColor: "green",
  };

  return (
    <div>
      <h1 className="header">jdjdj</h1>
      <h2 style={prop.data === "apply" ? h2 : h3}>jdjdj</h2>
    </div>
  );
}

/*
Global Style 
inline Style
Conditional Style


*/
