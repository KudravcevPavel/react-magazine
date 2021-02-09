const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};
const getTotalPrise = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MEBEL_CART': {
      const currentMebelItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentMebelItems,
          totalPrice: getTotalPrise(currentMebelItems),
        },
      };

      const items = Object.values(newItems).map((obj) => obj.items);
      const allMebel = [].concat.apply([], items);
      const totalPrice = getTotalPrise(allMebel);

      return {
        ...state,
        items: newItems,
        totalCount: allMebel.length,
        totalPrice,
      };
    }

    case 'CLEAR_CART':
      return {
        totalPrice: 0,
        totalCount: 0,
        items: {},
      };

    default:
      return state;
  }
};

export default cart;
