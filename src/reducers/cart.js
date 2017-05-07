const initialState = {
	visibility: true
}

function changeVisibility(state) {
	let res;
	if (state.visibility) {
		res = false;
	} else {
		res = true;
	}
	return {visibility: res}
}

const cart = (state = initialState, action) => {
  switch (action.type) {	  
	case 'CHANGE_VISIBILITY': return changeVisibility(state); 
    default: return state;
  }
}

export default cart
