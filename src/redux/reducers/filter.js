const initialState = {
  category: 0,
  sortBy: 'popular',
};

const filters = (state = initialState, action) => {
  if (action.type === 'SET_SORT_BY') {
    return {
      ...state,
      sortBy: acti0n.payload,
    };
  }
  return state;
};

expect default filters;