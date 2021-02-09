export const fetchMebel = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));
  fetch(
    `http://localhost:3001/mebel?${category !== null ? `category=${category}` : ''}&_sort=${
      sortBy.type
    }&_order=${sortBy.order}`,
  )
    .then((resp) => resp.json())
    .then((json) => {
      dispatch(setMebel(json));
    });
};

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const setMebel = (items) => ({
  type: 'SET_MEBEL',
  payload: items,
});
