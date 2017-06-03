const initialState = {
  count: 0,
  products: [],
  total: 0
}
function getProductIndexById(products, id) {
  for(let i = 0; i < products.length; i++) {
    if (products[i].id == id)
	  return i;
  }
  return false;
}
function addProduct(state, product) {
  let newState = {...state};
  let productIndex = getProductIndexById(newState.products, product.id);
  if (productIndex !== false) {
    newState.products[productIndex].count += 1;
  } else {
    newState.products.push(product);
  }
  newState.count += 1;
  newState.total += parseInt(product.price);
  saveProducts(newState);
  return newState;
}
function deleteProduct(state, id) {
  let newState = {...state};
  let productIndex = getProductIndexById(newState.products, id);
  if (productIndex !== false) {
    newState.count -= newState.products[productIndex].count;
    newState.total -= newState.products[productIndex].count * parseInt(newState.products[productIndex].price);
    newState.products.splice(productIndex, 1);
    saveProducts(newState);
  }	
  return newState;
}
function increaseProduct(state, id) {
  let newState = {...state};
  let productIndex = getProductIndexById(newState.products, id);
  if (productIndex !== false) {
    newState.products[productIndex].count += 1;
	newState.count += 1;
	newState.total += parseInt(newState.products[productIndex].price);
	saveProducts(newState);
  }	
  return newState;
}
function decreaseProduct(state, id) {
  let newState = {...state};
  let productIndex = getProductIndexById(newState.products, id);
  if (productIndex !== false) {
	newState.total -= parseInt(newState.products[productIndex].price);
	  if (newState.products[productIndex].count > 1) {
		newState.products[productIndex].count--;
	  } else {
		newState.products.splice(productIndex, 1);
	  }
	newState.count--;
  }
  saveProducts(newState);
  return newState;
}	
function saveProducts(state) {
  localStorage.setItem("Cart", JSON.stringify(state));
}
function loadProducts(state) {
  let newState = {...state}
  if(localStorage.getItem("Cart") != null) {
	newState = JSON.parse(localStorage.getItem("Cart"));
  } 
  return newState;
}

const products = (state = initialState, action) => {
  switch (action.type) {	  
    case 'ADD_PRODUCT': return addProduct(state, action.product);
	case 'DELETE_PRODUCT': return deleteProduct(state, action.id);
	case 'INCREASE_PRODUCT': return increaseProduct(state, action.id); 
	case 'DECREASE_PRODUCT': return decreaseProduct(state, action.id); 
	case 'SAVE_PRODUCTS': saveProducts(state); 
    default: return loadProducts(state);
  }
}

export default products
