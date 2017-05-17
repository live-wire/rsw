import { connect } from 'react-redux'
import { performCalculations, removeRow, updateRow } from '../js/actions'
import Rows from '../components/Rows'

//[{"key":1,"title":"Yellow","amount":100,"hidden":"Yellow Hidden Item"},{"key":2,"title":"Red","amount":50,"hidden":"Red Hidden Item"}]

const mapStateToProps = (state) => {
  return {
    rows:state.rows
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeRow: (index) => {
      dispatch(removeRow(index))
    },
    updateRow: (index,item) => {
      dispatch(updateRow(index,item))
    },
    performCalculations : () => {
      dispatch(performCalculations())
    }
  }
}

const RowsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Rows)

export default RowsContainer