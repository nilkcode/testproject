import axios from 'axios';
import React,{useState,useEffect} from 'react'
import{Form,Button} from 'react-bootstrap';
import {useHistory,useParams} from "react-router-dom"


const EditUser = () => {
    let history = useHistory();

    const { id } = useParams();
    alert(id);

    const[user, setUser] = useState({
      name: "",
      username: "",
      email: "",
      phone: "",
      website: "",
  
    });
  
   
    const {name,username,email,phone, website} = user;
    
  
   
    const onInputChange = e => {
      setUser({...user,[e.target.name]: e.target.value})
     
    }
    const onSubmit = async e => {
     e.preventDefault();
     await axios.post("http://localhost:3003/users", user);
     history.push("/");
    }

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users/" + id);

    
       console.log(result);
    };


   useEffect (() => {
        loadUsers()
    },[])
    
  
    return (
      <div className="container mt-5 card p-5 w-50">
        <h1>Edit User List</h1>
       <Form onSubmit={ e => onSubmit(e)}>
          <Form.Group className="mb-3" >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={name} placeholder="name" onChange = {e => onInputChange(e)} />
             
          </Form.Group>
  
          <Form.Group className="mb-3" >
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text"  name="username" value={username} placeholder="userName" onChange = {e => onInputChange(e)}  />
          </Form.Group>
  
          <Form.Group className="mb-3" >
              <Form.Label>Email Id</Form.Label>
              <Form.Control type="email" name="email" value={email} placeholder="emailid"  onChange= {e => onInputChange(e)} />
          </Form.Group>
  
          <Form.Group className="mb-3" >
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text"  name="phone" value={phone} placeholder="phone number"  onChange= {e => onInputChange(e)} />
          </Form.Group>
  
          <Form.Group className="mb-3" >
              <Form.Label>Website</Form.Label>
              <Form.Control type="text" name="website"   value={website} placeholder="website"  onChange= {e => onInputChange(e)} />
          </Form.Group>
        
          <Button variant="primary" type="submit" className="w-100">
              Submit
          </Button>
       </Form>
                    
      </div>
    )
  }

export default EditUser
