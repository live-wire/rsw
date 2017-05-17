/*
 * action types
 */

export const ADD_TXN = 'ADD_TXN'
export const REMOVE_TXN = 'REMOVE_TXN'
export const TOGGLE_TXN = 'TOGGLE_TXN'


/*
 * other constants
 */

/*
 * action creators
 */

export function addTxn(text) {
  return { type: ADD_TXN, text:text }
}
export function removeTxn(key) {
  return { type: REMOVE_TXN, key:key }
}

export function toggleTxn(key) {
  return { type: TOGGLE_TXN, key:key }
}