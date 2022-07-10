
import React from "react";

export default class UncontrolledComp extends React.Component { 
   constructor(){
       super();
       this.name = React.createRef();
       this.password = React.createRef();
   }
  
   submitForm(event){debugger
        event.preventDefault()
        if(this.name.current.value.length >= 5 && this.password.current.value.length >= 6) {
            console.log("You can login Here")
        }
       
        else {
            console.log("you cant login");
        }
   }


    render(){
        return(
        <>
         
          <form onSubmit={(event)=>{this.submitForm(event)}}>
              Name ::<input type="text" placeholder="name" ref={this.name}/><br/><br/>
              password:: <input type="password" placeholder="password" ref={this.password}/><br/><br/>
              <button type="submit" className="btn btn-primary" >Submit</button>
          </form>
        </>
        )
    }
}


/*
What is uncontrolled Component ?
Ans:: When we calling any component without state so that component 
      called as uncontrolled component in uncontrolled component we use ref.


*/