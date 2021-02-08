/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

import { setMebel } from './redux/actions/mebel';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    fetch('http://localhost:3001/mebel')
      .then((resp) => resp.json())
      .then((json) => {
        dispatch(setMebel(json));
      });
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
