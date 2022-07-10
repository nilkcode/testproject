import React from "react";

export default class EventHandling extends React.Component {
  testFunction() {
    alert("Hello My Function");
  }
  testFunctionTwo() {
    alert("Hello Second Function");
  }

  render() {
    return (
      <div>
        <h2>My Event Handling Works</h2>
        <button class="btn btn-info" onClick={() => this.testFunction()}>
          Click Me Now
        </button>
        <button class="btn btn-success" onClick={this.testFunctionTwo.bind()}>
          Click Me Now
        </button>
      </div>
    );
  }
}

// Notes
// 1. In events we used arrow function on onClick event beocuse the -
//-onclick removed its scope becouse it is in classs

// arrow function  does not have own this keyword so it take parent clsss-
// this keyword

// 2. we used this keyword becouse test function is inside class so -
//- it treated as object of a class we can bind with this keyword and-
//- and for calling function we used curly ()
