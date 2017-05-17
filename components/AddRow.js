import React from 'react';
import { connect } from 'react-redux'
import { addRow,performCalculations } from '../js/actions'
import RaisedButton from 'material-ui/RaisedButton';

let AddRow = ({dispatch,state})=>{
	return (<div style={{margin:"0 auto",textAlign:"center"}}>
		<RaisedButton label={state.rows.length>0 ?"+ ROW":"INITIALIZE"} onClick={()=>{dispatch(addRow({l:"",w:"",h:"",gsm:"",ply:"",key:parseInt(Math.random()*1000)}));dispatch(performCalculations());}} primary={true}/>
	</div>);
};

const mapStateToProps = (state, ownProps) => {
  return {
    state: state
  }
}
AddRow = connect(mapStateToProps)(AddRow)

export default AddRow