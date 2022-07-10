import React from 'react';

class ControlledComp extends React.Component {
    constructor(){
        super()
        this.state = {
           name: "",
           password:""
        }
    }

    submitForm() {
     console.warn(this.state)
    }

     render(){
         return(
             <div>
                    <input type="text" placeholder="please enter name" 
                     onChange={(e) => {this.setState({name:e.target.value})}} /><br/><br/>
                    <input type="password"  onChange={(e) => {this.setState({password:e.target.value})}}/>
                    <br/><br/>
                    <button onClick={() => {this.submitForm()} } className="btn btn-primary">Submit Form </button>
             </div>
          
         )
     }
}

export default ControlledComp;









/*
What is controlled Component ?
ans:: When we create any form and made some input field that so when we access ,update , delete input 
      value by using state called controlled component. whenever we access any component 
      by using state it is called controlled component.


How to make controlled Component ?
Test Controlled Component ?



*/


