import React from "react";

export default function EventHandlingFun() {
  const testFun = () => {
    alert("Hello Test function Welcome");
  };

  return (
    <div>
      <h1>sjsjsj</h1>
      <button className="btn btn-primary" onClick={testFun}>
        Click Me
      </button>
    </div>
  );
}
