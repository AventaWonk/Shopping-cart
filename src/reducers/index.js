import { combineReducers } from 'redux'
import cart from './cart'
import products from './products'

const appReducer = combineReducers({
  cart,
  products
})

export default appReducer