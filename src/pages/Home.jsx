import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, MebelBlock } from '../components';

import { setCategory } from '../redux/actions/filters';

const categoryNames = ['Кровати', 'Комоды', 'Стелажи', 'Тумбы', 'Столы'];

function Home() {
  const dispatch = useDispatch();

  const items = useSelector(({ mebel }) => mebel.items);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} />
        <SortPopup
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className="content__title">Все товары</h2>
      <div className="content__items">
        {items && items.map((obj) => <MebelBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
