import React, { Component } from "react";

export default class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError() {
    return { error: true };
  }

  render() {
    return (
      <div>
        {this.state.error ? (
          <h1>Custome Error in Project Directory</h1>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}

/*
What is error Boundry ?


*/
