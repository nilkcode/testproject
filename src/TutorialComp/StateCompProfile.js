import React from "react";

export default class StateCompProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "nilesh",
      email: "nilesh@gmail.com",
      count: 0,
    };
  }
  updateState() {
    this.setState({
      name: "Raaj",
      email: "rajdhanorkar@gmail.com",
      count: this.state.count + 1,
    });
  }
  resetCount() {
    this.setState({
      count: 0,
    });
  }

  render() {
    console.warn("render");
    return (
      <div>
        <div className="card">
          <h1> This is first Component {this.state.name}</h1>
          <span>Email : {this.state.email}</span>
          <h4>Count: {this.state.count}</h4>
        </div>

        <button
          className="btn btn-success mx-2"
          onClick={() => {
            this.updateState();
          }}
        >
          Update State
        </button>
        <button
          className="btn btn-info"
          onClick={() => {
            this.resetCount();
          }}
        >
          Reset State
        </button>
      </div>
    );
  }
}

// What is State
// DEF :: State is object of any class we can't access from outside becouse it is private
// 1.It work as varible in react we can assign value in state
// 2.We can assign value inside the state also update this value
// 3.state will be change

// #########################   //

//Super :: By calling the super() method in the constructor method, we call the parent's constructor
//method and gets access to the parent's properties and methods

// #########################   //

//setState :: the set state used for to update state
