import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomeOne = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
    console.log("Hello Word");
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());

   console.log(users);
  };
  

  return (
    <div className="container mt-5">
      <h1>Home Page</h1>
      <table className="table border shadow">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">UserName</th>
            <th scope="col">Email Id</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          
          {users.map((user ,index) => (
            <tr>
                <td scope="row">{index +1}</td>
                <td >{user.name}</td>
                <td >{user.username}</td>
                <td >{user.email}</td>      
                <td >
                    <Link className="btn btn-success">Add</Link>
                    <Link className="btn btn-primary mx-2" to="/users/edituser/:id">Edit</Link>
                    <Link className="btn btn-danger">Delete</Link>
                </td>             
            </tr>
           )       
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HomeOne;
