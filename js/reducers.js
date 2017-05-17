import { combineReducers } from 'redux'
import { ADD_ROW, REMOVE_ROW, CALCULATE, UPDATE_ROW, UPDATE_QUANTITY_PRICE } from './actions'


function reducerTop(state = {rows:[]}, action) {
  switch (action.type) {
    case ADD_ROW:
      if(state.rows.length>0)
      {
        return {
          ...state,
          rows:[
            ...state.rows,
            {
              ...action.item,
              ...state.rows[state.rows.length-1],
              key:action.item.key
            }
          ]
        };
      }
      return {
        ...state,
        rows:[
          ...state.rows,
          {
            ...action.item
          }
        ]
      };
    case REMOVE_ROW:
      return { 
        ...state,
        rows:state.rows.filter((item, index) => {
              if (index != action.index) {
                return {...item}
              }
            })
      };
    case UPDATE_ROW:
      return { 
        ...state,
        rows:state.rows.map((item, index) => {
              if (index == action.index) {
                return {...action.item}
              }
              return item
            })
      };
    case UPDATE_QUANTITY_PRICE:
      return { 
        ...state,
        quantity:action.item.quantity,
        price:action.item.price
      };
    case CALCULATE:
      let sumOfWeights = 0;
      return {
        ...state,
        rows:state.rows.map((item,index)=>{
          var l = item.l || 0;
          var w = item.w || 0;
          var h = item.h || 0;
          var gsm = item.gsm || 0;
          var ply = item.ply || 0;
          var reelSize = w+h;
          var sheetSize = 2*(l+w)+2;
          var final = gsm/1550 * reelSize * sheetSize * ply;
          sumOfWeights+=final;
          return {...item,weight:final};
        }),
        totalWeight:sumOfWeights,
        totalPrice:(sumOfWeights>0)?((state.quantity || 1)*(state.price || 1)*(sumOfWeights || 1)):0
      };
    default:
      return state
  }
}

export default reducerTop