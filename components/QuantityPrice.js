import React from 'react';
import { connect } from 'react-redux'
import { updateQuantityPrice,performCalculations } from '../js/actions'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 20,
  padding:10
};

let QuantityPrice = ({dispatch,state})=>{
	return (
		<div>
      <TextField
      type="number"
      value={state.quantity}
      floatingLabelText="Quantity" 
	  onChange={(e)=>{dispatch(updateQuantityPrice({price:state.price,quantity:parseFloat(e.target.value)}));dispatch(performCalculations());}}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <TextField
      type="number"
      value={state.price}
      floatingLabelText="Price per weight" 
	  onChange={(e)=>{dispatch(updateQuantityPrice({quantity:state.quantity,price:parseFloat(e.target.value)}));dispatch(performCalculations());}}
      />
      <div style={{position:"fixed", top:"0px", right:"0px", color:"#fff", padding:"10px",background:"#5bc0de"}}>
		{state.totalWeight>0 && state.rows.length>0 &&<RaisedButton label={"Weight: "+state.totalWeight.toFixed(2)} disabled={true} style={style} />}
   		<br/>
   		{state.price!=undefined && state.totalPrice>0 && state.rows.length>0 && <RaisedButton label={"Price: "+state.totalPrice.toFixed(2)} disabled={true} style={style} />}
      </div>

   		</div>);
};
const mapStateToProps = (state, ownProps) => {
  return {
    state: state
  }
}
QuantityPrice = connect(mapStateToProps)(QuantityPrice)

export default QuantityPrice