import React from 'react';
import Application from "../components/Application"
import { connect } from 'react-redux'
import { addTxn } from '../js/actionstry'


class AddTransaction extends React.Component{
	constructor(props){
		super(props)
		this.state={inputValue:''}
		this._updateInputValue = this._updateInputValue.bind(this)
	}
	render(){
		return (
			<div>
				<input value={this.state.inputValue} type='text' onChange={this._updateInputValue}/>
				<button onClick={()=>this.props.onClick(this.state.inputValue)}>Add +</button>
			</div>
			);
	}
	_updateInputValue(evt){
		this.setState({
			inputValue:evt.target.value
		});
	}
}

export default class X2 extends React.Component {
	constructor(props){
		super(props);
		this.state={};
		this.state.todos = [{"key":1,"title":"Yellow","amount":100,"hidden":"Yellow Hidden Item"},{"key":2,"title":"Red","amount":50,"hidden":"Red Hidden Item"}];
		this._addTxn = this._addTxn.bind(this);
		this._removeTxn = this._removeTxn.bind(this);
	}
	render(){
		
		return (
		<div>
		<AddTransaction onClick={this._addTxn} />
		<Application todos={this.state.todos} removeTxn={this._removeTxn}/>
		</div>
		);
	}
	_addTxn(name){
		let temp = {};
		temp.title=name;
		temp.amount = 0;
		temp.hidden = name+" Hidden Item";
		temp.key=this.state.todos.length+1;
		this.setState({todos:[temp,...this.state.todos]});
	}
	_removeTxn(name){
		this.setState({todos:this.state.todos.filter((todo)=>todo.title!=name)});
	}

}