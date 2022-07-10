import React from "react";

export default class ComponentDidUpdate extends React.Component {
  constructor() {
    super();
    this.state = {
      active: null,
      who: "nilesh",
    };
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
    if (this.state.who === "nilesh") {
      this.setState({ who: "Nilesh Kahalkar" });
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.who}</h1>
        <button
          className="btn btn-primary "
          onClick={() => this.setState({ active: "yes updated" })}
        >
          {" "}
          Activate
        </button>
      </div>
    );
  }
}

/*
Notes

Q.What is ComponentDidUpdate ?
ans:: When we call in setState and update something like true to false  from 
      one a function using setState method so in this smothing will be updated 
      so we can say that componentDidUpdate.
      ex New Props, setState(), forceuUpdate(); 


Q.Understand Somepoints from official website ?
Q.Make Example for it ?
*/
