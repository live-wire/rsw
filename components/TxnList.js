import React from 'react';
import Txn from "./Txn";

const TxnList = ({todos=[],removeTxn,toggleTxn})=> {
	return (
		<ul> 
		{todos.map((todo)=><Txn key={todo.key} removeTxn={removeTxn} todo={todo} toggleTxn={toggleTxn}/>)} 
		</ul>
		);

};

export default TxnList