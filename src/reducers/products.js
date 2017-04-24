const initialState = {
	count: 0,
	products: []
}
function addProduct(state, product) {
	let newState = {...state}
	for(let i = 0; i < state.products.length; i++){
		if (state.products[i].id == product.id){
			newState.count += 1;
			newState.products[i].increaseCount();
			return newState;
		}
	}
	newState.count += 1;
	newState.products.push(product);
	return newState;
}
function deleteProduct(state, id) {
	let newState = {...state}
	for(let i = 0; i < newState.products.length; i++){
		if (newState.products[i].id == id){
			let count = newState.products[i].count;
			newState.products.splice(i, 1);
			newState.count -= 1;
			return newState;
		}
	}
	
}
function increaseProduct(state, id){
	return state;
}
function decreaseProduct(state, id){
	return state;
}
function saveProducts(state){
	localStorage.setItem("Cart", JSON.stringify(state));
}
function loadProducts(state){
	let newState = {...state}
	if(localStorage.getItem("Cart") != null) {
		newState.products = JSON.parse(localStorage.getItem("Products"));
	} 
	return newState;
}

const products = (state, action) => {
  switch (action.type) {	  
    case 'ADD_PRODUCT': return addProduct(state, action.product);
	case 'DELETE_PRODUCT': return deleteProduct(state, action.id);
	case 'INCREASE_PRODUCT': return increaseProduct(state, action.id); 
	case 'DECREASE_PRODUCT': return decreaseProduct(state, action.id); 
	case 'LOAD_PRODUCTS': return loadProducts(state); 
	case 'SAVE_PRODUCTS': saveProducts(state); 
    default: return state;
  }
}

export default products