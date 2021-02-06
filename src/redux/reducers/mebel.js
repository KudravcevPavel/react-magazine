const initialState = {
  items: [],
  isLoading: false,
};

const mebel = (state = initialState, action) => {
  if (action.type === 'SET_MEBEL') {
    return {
      ...state,
      items: action.payload,
      isLoading: true,
    };
  }
  return state;
};

export default mebel;
