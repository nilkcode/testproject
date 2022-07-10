import react, { Component } from "react";

class Authetication extends Component{
  
constructor(){
    super();
    this.state = {
        email:"null",
        password:"null",
        login:false,
        token:null,
    }
 }

 login() {
     //console.warn(this.state)
     fetch('https://reqres.in/api/login',{
         method:"POST",
         body:JSON.stringify(this.state)
     }).then((resp)=> {
        resp.json().then((result)=>{
            console.log("result",result);
        })
     })
    }
   


  render(){
    return (
    <div>
        <h2>JWT Token</h2>
        <label className="mx-2">Email :</label> 
        <input type="text" onChange={(event)=> {this.setState({email:event.target.value})}}/><br></br>
        <br></br>
        <label className="mx-2">Password :</label> 
        <input type="password" onChange={(event)=> {this.setState({password:event.target.value})}}/><br></br>
       <button className="btn btn-primary" onClick={()=>this.login()}>Login</button>
    </div>
    )
  }
}

export default Authetication;
