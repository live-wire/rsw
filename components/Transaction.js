import React from "react";


export default class Transaction extends React.Component {
	constructor(props){
		super(props);
		this.state={isExpanded:false};
		this._toggleState = this._toggleState.bind(this);
	}
	_toggleState(){
		this.setState({isExpanded:!this.state.isExpanded});
	}

	render(){
		let sty = {
			"padding":"10px",
			"background":"#efefef",
			"marginTop":10
		};
		let hiddenItem = <div style={{height:100,textAlign:'center'}}>{this.props.todo.hiddentext}</div>;

		return (
			<li key="{this.props.todo.key}+1" style={sty}>
				<button style={{cursor:'pointer',background:'red',float:'right',color:'#ffffff',borderRadius:20}} onClick={()=>this.props.removeTxn(this.props.todo.title)}>X</button>
				<h2>{this.props.todo.title}</h2>
				<p>{this.props.todo.amount}</p>
				<div style={{textAlign:'center'}}><button style={{cursor:'pointer',margin:'0 auto'}} onClick={this._toggleState}>=====</button></div>
				{this.state.isExpanded && hiddenItem}
			</li>
		);
	
	}
		
}
