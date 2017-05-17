import React, { PropTypes } from "react";
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  margin: 20,
  padding:20,
  width:"75%"
};
// const Row = ({ row, updateRow,index}) => (
//   <li
//     style={{
//       textDecoration:"none"
//     }}
//   >
//     <div>
//       <input value={row.l} placeholder="length" onChange={(e)=>{updateRow(index,{})}}/>
//     </div>
    
//   </li>
// );


class Row extends React.Component{
  constructor(props){
    super(props)
    this.state={...props.row}
    this._updateRowValue = this._updateRowValue.bind(this)
  }
  render(){
    return (
      <li
        style={{
          textDecoration:"none"
        }}>
        <Paper style={style} zDepth={1} rounded={false} style={{display:"inline-block",marginTop:"10px"}}>
        <div>
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
          <TextField
            style={{width:"25%",marginBottom:10}}
            type="number"
            value={this.props.row.l}
            floatingLabelText="length" 
            onChange={(e)=>{this._updateRowValue('l',e);}}
            />&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;
          <TextField
            style={{width:"25%",marginBottom:10}}
            type="number"
            value={this.props.row.w}
            floatingLabelText="width" 
            onChange={(e)=>{this._updateRowValue('w',e);}}
            />&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;
          <TextField
            style={{width:"25%",marginBottom:10}}
            type="number"
            value={this.props.row.h}
            floatingLabelText="height" 
            onChange={(e)=>{this._updateRowValue('h',e);}}
            /><br/> &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;
          <TextField
            style={{width:"25%",marginBottom:10}}
            type="number"
            value={this.props.row.gsm}
            floatingLabelText="GSM" 
            onChange={(e)=>{this._updateRowValue('gsm',e);}}
          />&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp; 
          <TextField
            style={{width:"25%",marginBottom:10}}
            type="number"
            value={this.props.row.ply}
            floatingLabelText="No. of Ply" 
            onChange={(e)=>{this._updateRowValue('ply',e);}}
          />
          {this.props.row.weight>0 && <RaisedButton label={"Weight: "+this.props.row.weight.toFixed(2)} disabled={true} style={{padding:20}} />}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FloatingActionButton mini={true} secondary={true} onClick={()=>{this.props.removeRow(this.props.index);this.props.performCalculations();}}>
            <ActionDelete />
          </FloatingActionButton>
          
        </div></Paper>
      </li>
      );
  }
  _updateRowValue(key,evt){
    let obj=this.state;
    obj[key]=parseFloat(evt.target.value);
    this.props.updateRow(this.props.index,obj);
    this.props.performCalculations();
  }
}

export default Row;
