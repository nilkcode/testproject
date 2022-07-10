import React from "react";

export default class CompMapFunction extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        { name: "nilesh", email: "nkahalkar@gmail.com" },

        { name: "Mahesh", email: "mahesh@gmail.com" },
        { name: "Raj", email: "raj@gmail.com" },
      ],
    };
  }
  render() {
    return (
      <div
        style={{
          background: "#eee",
          padding: "20px",
          width: "50%",
          margin: "0 auto",
          borderRadius: "4px",

          color: "#55940d",
        }}
      >
        {this.state.list.map((item) => (
          <div>
            Name: {item.name} ,Email : {item.email}
          </div>
        ))}
      </div>
    );
  }
}
