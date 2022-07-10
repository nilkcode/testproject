import React from "react";
import "../custome.css";

export default class ApiCall extends React.Component {
  constructor() {
    super();
    this.state = {
      users: null,
    };
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users?page=2").then((resp) => {
      resp.json().then((result) => {
        console.warn(result.data);
        this.setState({ users: result.data });
      });
    });
  }

  render() {
    return (
      <div className="p-4">
        <table className="table table-bordered table-striped table-custome">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Image</th>
            </tr>
          </thead>
          {this.state.users
            ? this.state.users.map((item, i) => (
                <tbody>
                  <tr>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>
                      <img src={item.avatar} width={50} />
                    </td>
                  </tr>
                </tbody>
              ))
            : "no data found"}
        </table>
      </div>
    );
  }
}

/*
then :: then keyword return promises so we want to handle this we used then

*/
