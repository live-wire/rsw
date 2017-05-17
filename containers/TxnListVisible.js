import { connect } from 'react-redux'
import { toggleTxn,removeTxn } from '../js/actionstry'
import TxnList from '../components/TxnList'

//[{"key":1,"title":"Yellow","amount":100,"hidden":"Yellow Hidden Item"},{"key":2,"title":"Red","amount":50,"hidden":"Red Hidden Item"}]

const mapStateToProps = (state) => {
  return {
    todos:state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeTxn: (key) => {
      dispatch(removeTxn(key))
    },
     toggleTxn: (key) => {
      dispatch(toggleTxn(key))
    }
  }
}

const TxnListVisible = connect(
  mapStateToProps,
  mapDispatchToProps
)(TxnList)

export default TxnListVisible