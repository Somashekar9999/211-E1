const initialState = {
  shoes: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState) => {
  switch(type) {
    case GET_PRODUCTS: 
        return {...state, products: payload};
    case SORT_PRODUCTS :
        return {
            ...state, products: [...state.products].sort((a,b) => a[payload] > b[payload] ? 1 : a[payload] < b[payload] ? -1 : 0)
        }
    default: 
        return state
}
  
};




