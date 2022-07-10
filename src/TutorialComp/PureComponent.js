import React , {Component,PureComponent} from "react";

export default class PureComponents extends PureComponent {
  constructor() {
      super();
      this.state = {
          data:10,
      }
  }
 


    render(){

        console.log(this.state);
        return (
        <div>
            <div>Pure Component Works {this.state.data}</div>
            <button onClick={()=> this.setState({data:20})}>Update State</button>
        </div>
        )
    }
}

/*
What is Pure Component ?
React pure component is same as react component the diffrence is that 
simple react component does not implement shoulComponentUpdate(),but pure component 
update with respective state and props

Ex:: If any previouse component we update state from a =10, in simple component it render 
and state will  again and  again but in case of Pure Component the render result does not produce 
so the value does not produce repeatedly.

Benefit :: By using Pure Component we increases Performance of Application becouse render does not 
not call every time.(Load Time Effect)


*/