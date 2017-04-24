export const addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    product
  }
}
export const deleteProduct = (id) => {
  return {
    type: 'DELETE_PRODUCT',
    id
  }
}
export const increaseProduct = (id) => {
  return {
    type: 'INCREASE_PRODUCT',
    id
  }
}
export const decreaseProduct = (id) => {
  return {
    type: 'DECREASE_PRODUCT',
    id
  }
}
export const saveProducts = () => {
  return {
    type: 'SAVE_PRODUCTS'
  }
}
export const loadProducts = () => {
  return {
    type: 'LOAD_PRODUCTS'
  }
}