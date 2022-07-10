import React from "react";

export default class FormComp extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      password: null,
    };
  }

  formSubmit() {
    console.warn(this.state);
  }

  render() {
    return (
      <div className="container w-50 ml-auto">
        <h1>Form Handling Method</h1>
        <input
          type="text"
          name="user"
          onChange={(e) => this.setState({ user: e.target.value })}
        />
        <br></br> <br></br>
        <input
          type="password"
          name="password"
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <br></br> <br></br>
        <button className="btn btn-success" onClick={() => this.formSubmit()}>
          Submit
        </button>
      </div>
    );
  }
}

/*
form submittion in react
To submiting form we used state for every field .



*/
