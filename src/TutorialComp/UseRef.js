import React, { Component } from "react";

export default class ApiCall extends React.Component {
  constructor() {
    super();
    this.userRef = React.createRef();
  }
  changeInput() {
    //console.warn(this.userRef);
    this.userRef.current.value = 1000;
  }

  render() {
    return (
      <div>
        <h2>What is refrence in react</h2>
        <input type="text" name="user" ref={this.userRef} />
        <button
          className="mx-2 btn btn-primary"
          onClick={() => this.changeInput()}
        >
          Click me
        </button>
      </div>
    );
  }
}

/*
* What is Ref  ?
Use Ref :: Ref is react property by using ref we can modify DOM properties
* When to use and not wen to use



*/
