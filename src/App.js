import React from "react";
import PropTypes from "prop-types";

//state 사용하기, state는 자바스크립트!
class App extends React.Component {
  state = {
    isLoading: true
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading: false});
    }, 6000);
  }
   render(){
     const {isLoading} = this.state;
     return <div>
       {isLoading? "Loading": "We are ready"}
       </div>;
   }
}

export default App;
