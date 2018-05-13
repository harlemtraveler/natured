import React, { Component } from 'react';
import '../../App.css';
import { Route, Switch } from 'react-router-dom';
import CartItems from './CartItems';
import CartForm from './CartForm';
import Total from './Total';
import Recommended from './Recommended';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommended: []
    }
  }

  fetchRecommendedItems() {
    fetch('/api/products')
    .then(resp => {
      if(!resp.ok) throw new Error('There was an error');
      return resp.json();
    })
    .then(data => {
      this.setState({
        recommended: data.contents
      })
    })
  }

  componentDidMount() {
    this.fetchRecommendedItems();
  }

  render() {
    const cartItems = this.props.cartItems.map(product => {
      return (
        <Switch key={product.id}>
          <Route
            exact
            path={`/cart/edit/${product.id}`}
            render={() => (
              <CartForm
                product={product}
              />
            )}
          />
          <Route
            render={() => (
              <CartItems
                onDelete={this.props.onDelete}
                product={product}
              />
            )}
          />
        </Switch>
      )
    });

    const recommendedItems = this.state.recommended.map(product => {
      return (
        <Recommended
          key={product.id}
          product={product}
        />
      )
    })

    return (
      <div className="cart-container">
        <div className="left-cart">
          <h3>Shopping Cart:</h3>
          {cartItems}
        </div>
        <div className="right-cart">
          <Total />
          <h3>Recommended Items:</h3>
          {recommendedItems}
        </div>
      </div>
    )
  }
}

export default Cart;
