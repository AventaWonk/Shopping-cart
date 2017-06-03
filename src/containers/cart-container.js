import { connect } from 'react-redux'
import Cart from '../modules/cart'
import { addProduct } from '../actions/product-actions'
import { changeVisibility } from '../actions/cart-actions'

const mapStateToProps = (state) => {
  return {
	count: state.products.count,
    products: state.products.products,
    total: state.products.total,
    isVisible: state.cart.isVisible
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: product => dispatch(addProduct(product)),
  	changeVisibility: () => dispatch(changeVisibility())
  }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)
export default CartContainer
