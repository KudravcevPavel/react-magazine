/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';

import { Categories, SortPopup, MebelBlock } from '../components';

function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(name) => console.log(name)}
          items={['Кровати', 'Комоды', 'Стелажи', 'Тумбы', 'Столы']}
        />
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
        {items.map((obj) => (
          <MebelBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Home;
