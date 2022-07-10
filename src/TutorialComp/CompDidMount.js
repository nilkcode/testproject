import React from "react";

export default class componentDidMount extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
    console.warn("constructor");
  }

  componentDidMount() {
    this.setState({ date: "updated" });
    console.warn("didmount");
  }

  render() {
    console.warn("render");
    return (
      <div>
        <h1>Life cycle method Did Mount</h1>
      </div>
    );
  }
}

// Note
/*
ComponentDidMount ::  The component did mount call when we calling API data , so mostly 
                   so we should call api inside componentdidMount() always
ex :: Also used for async process 
*/
