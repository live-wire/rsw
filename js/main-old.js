import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import X2 from "../components/X2";
import AddTransaction from "../components/AddTransaction";
import TxnListVisible from "../containers/TxnListVisible";
import AddTxn from "../containers/AddTxn";

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import TxnApp from './reducerstry'

let store = createStore(TxnApp)
let App=()=>(<div>
	<AddTransaction />
	<TxnListVisible />
	</div>
	);
	//
const About = ()=><div><h1>ABOUT</h1></div>;
ReactDOM.render(<Provider store={store}>
<Router>
	    <div>
	      <ul>
	        <li><Link to="/">Home</Link></li>
	        <li><Link to="/about">About</Link></li>
	      </ul>

	      <hr/>

	      <Route exact path="/" component={App}/>
	      <Route path="/about" component={About}/>
	    </div>
  </Router>
	</Provider>,document.getElementById('root'));


 
// ReactDOM.render(<div>
// 	<Provider store={store}>
//   	 <Router>
// 	    <div>
// 	      <ul>
// 	        <li><Link to="/">Home</Link></li>
// 	        <li><Link to="/about">About</Link></li>
// 	      </ul>

// 	      <hr/>

// 	      <Route exact path="/" component={X2}/>
// 	      <Route path="/about" component={About}/>
// 	    </div>
//   </Router>
//   </Provider>
//   </div>,
//   document.getElementById('root')
// );
