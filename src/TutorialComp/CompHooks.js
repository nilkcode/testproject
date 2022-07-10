import React, { useState } from "react";

function CompHooks() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>
        Hooks in function component <span> {count} </span>
      </h1>
      <button
        className="btn btn-success"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default CompHooks;

/*
What is react Hooks ?
Ans::  In react we can't use state,life cycle method in functional component so if we want to 
       use this features we used react hooks.
       

Note :: Hokks are only usd in functional component not class component.

*/
