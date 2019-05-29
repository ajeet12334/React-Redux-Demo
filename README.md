Know React-Redux Step by Step

1)Open VS Code

2)Create folder

3)npm install -g react-create-app (You can skip if did already)

4)react-create-app react-redux-demo

5)npm install redux --save 

6)npm install react-redux --save 

7)npm start (app will open in browser if all is well)

8)Create Reducer file (reduce.js) 
		
		//Step 1
		const initialState = {
		   'age' : 20
		};

		//Step 2
		const reducer = (state=initialState,action) => {

		   //Step 4
		   const newState = {...state};

		   //Step 6
		   if(action.type==='ADD'){
			   newState.age++;
		   }
		   else if(action.type==='SUB'){
			   newState.age--;
		   }

		   //Step 5
		   return newState;

		}

		//Step 3
		export default reducer;



9)Change index.js file (create store)
		
		import React from 'react';
		import ReactDOM from 'react-dom';
		import './index.css';
		import App from './App';
		import * as serviceWorker from './serviceWorker';

		//Step 1
		import { createStore } from 'redux'
		import { Provider } from 'react-redux';
		import reducer from './reducer';

		//Step 2
		const store = createStore(reducer);

		//Step 3 : Wrap top component within Provider tag with store property
		ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

		serviceWorker.unregister();

10)Change app.js (Dispatch, Subscribe and connect)
		
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

													Thank You
