import React from 'react'
import { connect } from 'react-redux'
import { addTxn } from '../js/actionstry'

let AddTxn = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTxn(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Txn
        </button>
      </form>
    </div>
  )
}
AddTxn = connect()(AddTxn)

export default AddTxn