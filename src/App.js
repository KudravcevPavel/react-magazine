/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
/* import store from './redux/store'; */

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

import { setMebel as setMebelAction } from './redux/actions/mebel';

/* function App() {
  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setPizzas(json.pizzas);
      });
  }, []);

  return;
}
 */
class App extends React.Component {
  componentDidMount() {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        this.props.setMebel(json.mebel);
      });
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" render={() => <Home items={this.props.items} />} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.mebel.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMebel: (items) => dispatch(setMebelAction(items)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
