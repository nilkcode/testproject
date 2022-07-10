import React from "react";

export default class FormValidation extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      nameError: "",
      passwordError: "",
    };
  }
  validForm() {
    if (!this.state.name.includes("@") && this.state.password.length < 5) {
      this.setState({
        nameError: "Invalide Name",
        passwordError: "Password length Must be More than Five",
      });
    } else if (!this.state.name.includes("@")) {
      this.setState({
        nameError: "Invalide Name",
      });
    } else if (this.state.password.length < 5) {
      this.setState({
        passwordError: "Password length Must be More than Five",
      });
    } else {
      return true;
    }
  }

  submitForm() {
    this.setState({
      nameError: "",
      passwordError: "",
    });

    if (this.validForm()) {
      alert("form has been validate successfully");
    }
  }

  render() {
    return (
      <div>
        <div>
          <h2>My react comp from validation</h2>
        </div>
        <input
          type="text"
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
        />
        <br></br>
        <span style={{ color: "red", fontSize: "12px" }}>
          {this.state.nameError}
        </span>
        <br></br>
        <br></br>
        <input
          type="password"
          onChange={(event) => {
            this.setState({ password: event.target.value });
          }}
        />
        <br></br>
        <span style={{ color: "red", fontSize: "12px" }}>
          {this.state.passwordError}
        </span>
        <br></br>
        <br></br>
        <button className="btn btn-primary" onClick={() => this.submitForm()}>
          Submit Form
        </button>
      </div>
    );
  }
}
