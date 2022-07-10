import React from "react";
import { useState } from "react";

export const Test = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>Hello I am Test function :: {count}</h4>
      <button
        className="btn btn-sm btn-success"
        onClick={() => setCount(count + 1)}
      >
        {" "}
        Count me
      </button>
    </div>
  );
};
