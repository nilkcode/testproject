import React, { Component } from "react";

export default class LifeCycleMethod extends React.Component {
  constructor() {
    super();
    console.warn("constructer");
  }
  componentDidMount() {
    console.warn("component did Mount");
  }

  render() {
    console.warn("render");
    return (
      <div>
        <ul>
          <li> Name : Nilesh Kahalkar</li>
          <li>EmailId : nilesh.kahalar@gmail.com</li>
          <li>Roll : UI Developer</li>
          <li>Work Company: Accenture</li>
        </ul>
      </div>
    );
  }
}

/*
Q. What is life cycle method ?
Ans :: Life cycle method is define as the creation of instance of component in a following
       manner and also insert in to DOM
      - first calling  constructor(), second after rendering then componentdimount(),
      componentdidupdate(),componentwillUpdate() this are important lifecyle method
    
Q. What is life cycle phase ?
Ans:  Life cycle phases are Mouting ,updating and deleting/unmounting

*/
