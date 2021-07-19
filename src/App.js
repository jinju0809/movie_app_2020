import React from "react";
import PropTypes from "prop-types";

//state 사용하기, state는 자바스크립트!
class App extends React.Component {
  constructor(props){
    super(props);
    console.log("hello constructor");
  }
  //변해는 데이터를 위한 state, state는 Object이다.
  state = {
    count: 0
  };
   
  add = () => {
    console.log("add");
    this.setState(current => ({count: current.count +1 }))
  };
  minus = () => {
    console.log("minus");
    this.setState(current => ({count: current.count -1})) 
    
  };
  //mounting
  componentDidMount(){
    console.log("component rendered");
  }
  //updating
  componentDidUpdate(){
    console.log("I just updated");
  }

  //unmounting - 확인은 되지 않은... 
  componentWillUnmount(){
    console.log("Good bye");
  }
   render(){
     console.log("Im rendering");
     return <div>
       <h1>The number is: {this.state.count}</h1>
       <button onClick={this.add}>Add</button>
       <button onClick={this.minus}>Minus</button>
       </div>;
   }
}

export default App;
