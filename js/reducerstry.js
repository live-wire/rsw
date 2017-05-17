import { combineReducers } from 'redux';
import {ADD_TXN,REMOVE_TXN,TOGGLE_TXN,addTxn,removeTxn,toggleTxn} from "./actionstry"
const TxnApp = (state={},action)=>{
	switch(action.type)
	{
		case ADD_TXN:
			let temp = {};
			temp.title = action.text;
			temp.key = parseInt(Math.random()*100);
			temp.amount = parseInt(Math.random()*100);
			temp.hidden = false;
			temp.hiddenText = "It is the police";
			let todosUpdated = state.todos ?[temp,...(state.todos)]:[temp];
			return Object.assign({},state,{todos:todosUpdated});
		case REMOVE_TXN:
			return {todos:state.todos.filter((todo)=>todo.key!=action.key)};
		case TOGGLE_TXN:
			return {todos:state.todos.map((todo)=>{
				if(todo.key==action.key)
					{
						return {...todo,hidden:!todo.hidden};
					}
				else
					{
						return todo;
					}
				})};
		default:
			return state
	}

};

export default TxnApp