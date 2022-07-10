import React from "react";
import LifeCycleMethod from "./LifeCycleMethod";

export default class CompWillUnmount extends React.Component {
  constructor() {
    super();
    this.state = {
      toogle: true,
    };
  }

  componentWillUnmount() {
    alert("User Has been Deleted");
  }

  render() {
    return (
      <div>
        {this.state.toogle ? <LifeCycleMethod /> : "No Component Found"}

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => this.setState({ toogle: !this.state.toogle })}
        >
          Delete User
        </button>
      </div>
    );
  }
}

/*
ComponentWillUnmount()
Q.1 This method is called when a component is being removed from the DOM
when we destroyed or delete any component that time we call componentWillUnmount()
Ex: When we are using any user component and now destroye them and romove that component 
that time we this function call.



*/
