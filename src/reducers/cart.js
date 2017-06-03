const initialState = {
  isVisible: true
}

function changeVisibility(state) {
  let newState = {...state};
  newState.isVisible ^= true;
  return newState;
}

const cart = (state = initialState, action) => {
  switch (action.type) {	  
    case 'CHANGE_VISIBILITY': return changeVisibility(state); 
    default: return state;
  }
}

export default cart
