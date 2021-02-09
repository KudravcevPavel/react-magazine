const initialState = {
  items: [],
  isLoading: false,
};

const mebel = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MEBEL':
      return {
        ...state,
        items: action.payload,
        isLoading: true,
      };

    case 'SET_LOADED':
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default mebel;
