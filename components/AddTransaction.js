import React from 'react';
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
				<button onClick={()=>{
					this.props.dispatch(addTxn(this.state.inputValue));
					this.setState({
						inputValue:''
					});
					}}>Add +</button>
			</div>
			);
	}
	_updateInputValue(evt){
		this.setState({
			inputValue:evt.target.value
		});
	}
}

AddTransaction = connect()(AddTransaction)

export default AddTransaction

