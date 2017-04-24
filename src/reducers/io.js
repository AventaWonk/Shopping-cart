const initialState = {
	count: 0,
	products: []
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

const io = (state = initialState, action) => {
  switch (action.type) {	  
	case 'LOAD_PRODUCTS': return loadProducts(state); 
	case 'SAVE_PRODUCTS': saveProducts(state); 
    default: return state;
  }
}

export default io