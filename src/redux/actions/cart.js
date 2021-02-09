export const addMebelToCart = (mebelObj) => ({
  type: 'ADD_MEBEL_CART',
  payload: mebelObj,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});
