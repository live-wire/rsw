import React from 'react';


const Txn=({todo,removeTxn,toggleTxn})=>{
	let sty = {
			"padding":"10px",
			"background":"#efefef",
			"marginTop":10
		};
	let hiddenItem = <div style={{height:100,textAlign:'center'}}>{todo.hiddenText}</div>;
	return (
		<li key="{todo.key}" style={sty}>
				<button style={{cursor:'pointer',background:'red',float:'right',color:'#ffffff',borderRadius:20}} onClick={()=>removeTxn(todo.key)}>X</button>
				<h2>{todo.title}</h2>
				<p>{todo.amount}</p>
				<div style={{textAlign:'center'}}><button style={{cursor:'pointer',margin:'0 auto'}} onClick={()=>toggleTxn(todo.key)}>=====</button></div>
				{!todo.hidden && hiddenItem}
		</li> );

};

export default Txn