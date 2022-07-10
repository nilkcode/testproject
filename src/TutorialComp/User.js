import React, { Component } from "react";

export default class User extends Component {
  render() {
    if (true) {
      throw new Error("Custome Error Show In project");
    }
    return <div>Error Boundry</div>;
  }
}
