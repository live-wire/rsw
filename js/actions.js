/*
 * action types
 */

export const ADD_ROW = 'ADD_ROW'
export const UPDATE_ROW = 'UPDATE_ROW'
export const REMOVE_ROW = 'REMOVE_ROW'
export const CALCULATE = 'CALCULATE'
export const UPDATE_QUANTITY_PRICE = 'UPDATE_QUANTITY_PRICE'


/*
 * other constants
 */

/*
 * action creators
 */

export function addRow(item) {
  return { type: ADD_ROW, item }
}

export function removeRow(index) {
  return { type: REMOVE_ROW, index }
}

export function updateRow(index, item) {
  return { type: UPDATE_ROW, index,item }
}
export function updateQuantityPrice(item) {
  return { type: UPDATE_QUANTITY_PRICE, item }
}

export function performCalculations(text) {
  return { type: CALCULATE, text }
}