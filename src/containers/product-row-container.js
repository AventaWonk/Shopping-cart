import ProductRow from '../modules/product-row'
import { connect } from 'react-redux'
import { increaseProduct, decreaseProduct, deleteProduct } from '../actions/product-actions'

const mapDispatchToProps = (dispatch) => {
  return {
  	increaseProduct: (id) => dispatch(increaseProduct(id)),
  	decreaseProduct: (id) => dispatch(decreaseProduct(id)),
  	deleteProduct: (id) => dispatch(deleteProduct(id))
  }
}

const ProductRowContainer = connect(null, mapDispatchToProps)(ProductRow)
export default ProductRowContainer;