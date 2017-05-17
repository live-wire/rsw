import React from 'react';
import TransactionList from "./TransactionList"

const Application = (props)=>{
	return (
		<div style={{margin:'0 auto',width:'50%'}}>
		<TransactionList removeTxn={props.removeTxn} todos={props.todos}/>
		</div>
		);
};

export default Application