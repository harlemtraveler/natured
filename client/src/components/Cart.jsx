import React, { Component } from 'react';
import '../App.css';
import CartItems from './CartItems';
import Total from './Total';
import Recommended from './Recommended';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      recommended: [],
      user: {
        id: 1
      }
    }
  }

  fetchCartItems() {
    fetch(`/api/cart/${this.state.user.id}`)
    .then(resp => {
      if(!resp.ok) throw new Error('There was an error');
      return resp.json();
    })
    .then(data => {
      this.setState({
        cart: data.contents
      })
    })
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
    this.fetchCartItems();
    this.fetchRecommendedItems();
  }

  render() {
    const cartItems = this.state.cart.map(product => {
      return (
        <CartItems
          key={product.id}
          product={product}
        />
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
