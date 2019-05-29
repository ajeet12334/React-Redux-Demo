import React, {Component} from 'react';
import './App.css'

//Step 4
import { connect } from 'react-redux';

class App extends Component {

  // state = {
  //   'age' : 20
  // }

  // buttonUpClick = () => {
  //   this.setState({
  //     ...this.state,
  //     'age':this.state.age+1
  //   })
  // }

  // buttonDownClick = () => {
  //   this.setState({
  //     ...this.state,
  //     'age':this.state.age-1
  //   })
  // }

  //Step 3 : Use all param and method using props
  render(){
    return (
      <div className="App">
          <div> Age : <span> {this.props.age} </span></div>
          <button onClick={this.props.buttonUpClick}> Age Up </button>
          <button onClick={this.props.buttonDownClick}> Age Down </button>
      </div>
    );
  }
}

//Step 1 : create mapDispachToProps function to dispach the action from component to reducer
const mapDispachToProps = (dispach) => {
  return {
    buttonUpClick: () => dispach({type:'ADD'}),
    buttonDownClick: () => dispach({type:'SUB'})
  }
}

/** Step 2 : create mapStateToProps function to map the state 
             (get state from globel store automatically)
             with props
*/
const mapStateToProps = (state) => {
  return {
    age : state.age
  }
}

//Step 5 : Connect the App component with globel store using connect method(Using Higher order function)
export default connect(mapStateToProps,mapDispachToProps)(App);
