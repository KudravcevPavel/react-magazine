import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, MebelBlock, MebelLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchMebel } from '../redux/actions/mebel';
import { addMebelToCart } from '../redux/actions/cart';

const categoryNames = ['Кровати', 'Комоды', 'Стелажи', 'Тумбы', 'Столы'];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ mebel }) => mebel.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ mebel }) => mebel.isLoading);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchMebel(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const addMebelToCart = (obj) => {
    dispatch({ type: 'ADD_MEBEL_CART', payload: obj });
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все товары</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <MebelBlock
                onClickAddMebel={addMebelToCart}
                key={obj.id}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <MebelLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
