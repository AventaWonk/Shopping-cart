import { connect } from 'react-redux'
import Cart from '../modules/cart'
import { addProduct, loadProducts, saveProducts } from '../actions/product-actions'
import { changeVisibility } from '../actions/cart-actions'

const mapStateToProps = (state) => {
  return {
	  count: state.products.count,
    products: state.products.products,
    total: state.products.total,
    visibility: state.cart.visibility
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => dispatch(addProduct(product)),
  	loadProducts: () => dispatch(loadProducts()),
  	saveProducts: () => dispatch(saveProducts()),
  	changeVisibility: () => dispatch(changeVisibility())
  }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)
export default CartContainer