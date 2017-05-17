import React, { PropTypes } from 'react'
import Row from './Row'

const Rows = ({ rows , performCalculations, updateRow,removeRow}) => (
  <ul style={{listStyle:"none"}}>
    {rows.map((row,index) =>
      <Row
        key={row.key}
        performCalculations={performCalculations}
        updateRow={updateRow}
        removeRow={removeRow}
        row={row}
        {...row}
        index={index}
      />
    )}
  </ul>
)

export default Rows