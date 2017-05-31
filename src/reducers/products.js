const initialState = {
	count: 0,
	products: [],
	total: 0
}
function addProduct(state, product) {
	let newState = {...state}
	for(let i = 0; i < state.products.length; i++){
		if (state.products[i].id == product.id){
			newState.count += 1;
			newState.products[i].count++;
			newState.total += parseInt(product.price);
			saveProducts(newState);
			return newState;
		}
	}
	newState.count += 1;
	newState.products.push(product);
	newState.total += parseInt(product.price);
	saveProducts(newState);
	return newState;
}
function deleteProduct(state, id) {
	let newState = {...state}
	for(let i = 0; i < newState.products.length; i++){
		if (newState.products[i].id == id){
			newState.count -= newState.products[i].count;
			newState.total -= newState.products[i].count * parseInt(newState.products[i].price);
			newState.products.splice(i, 1);	
			saveProducts(newState);
			return newState;
		}
	}
}
function increaseProduct(state, id) {
	let newState = {...state}
	for(let i = 0; i < newState.products.length; i++){
		if (newState.products[i].id == id){
			newState.products[i].count++;
			newState.count++;
			newState.total += parseInt(newState.products[i].price);
			saveProducts(newState);
			return newState;
		}
	}
}
function decreaseProduct(state, id) {
	let newState = {...state}
	for(let i = 0; i < newState.products.length; i++){
		if (newState.products[i].id == id){
			newState.total -= parseInt(newState.products[i].price);
			if(newState.products[i].count > 1){
				newState.products[i].count--;
			} else {
				newState.products.splice(i, 1);
			}
			newState.count--;
			saveProducts(newState);
			return newState;
		}
	}
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
