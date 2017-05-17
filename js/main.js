import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import reducerTop from './reducers'
import { Provider } from 'react-redux'
import RowsContainer from "../containers/RowsContainer";
import AddRow from "../components/AddRow";
import QuantityPrice from "../components/QuantityPrice";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { addRow, removeRow, updateRow, performCalculations } from './actions'


let store = createStore(reducerTop,{rows:[]})

let App=()=>(<MuiThemeProvider><div>
	
	<QuantityPrice />
	<RowsContainer />
	<AddRow/>
	</div></MuiThemeProvider>
	);



ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'));

// console.log(store.getState())

// // Every time the state changes, log it
// // Note that subscribe() returns a function for unregistering the listener
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

// // Dispatch some actions
// store.dispatch(addRow({l:10,w:15,h:20,gsm:120,ply:1}))

// store.dispatch(addRow({l:10,w:15,h:20,gsm:150,ply:1}))

// store.dispatch(addRow({l:10,w:15,h:20,gsm:100,ply:1}))

// store.dispatch(updateRow(0,{l:10,w:15,h:20,gsm:120,ply:1.5}))
// store.dispatch(removeRow(1))



// store.dispatch(performCalculations())

// //store.dispatch(removeRow(2))

// // Stop listening to state updates
// unsubscribe()