import { connect } from 'react-redux'
import Cart from '../modules/cart'
import { addProduct, loadProducts, saveProducts } from '../actions/product-actions'

const mapStateToProps = (state) => {
  return {
	count: state.count,
    products: state.products
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => dispatch(addProduct(product)),
	loadProducts: () => dispatch(loadProducts()),
	saveProducts: () => dispatch(saveProducts())
  }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)
export default CartContainer