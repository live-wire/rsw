import React from 'react';
import Transaction from "./Transaction";

const TransactionList = (props)=> {
	return (
		<ul> 
		{props.todos.map((todo)=><Transaction key={todo.key} removeTxn={props.removeTxn} todo={todo}/>)} 
		</ul>
		);

};

export default TransactionList