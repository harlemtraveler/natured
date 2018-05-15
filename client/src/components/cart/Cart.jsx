import React from 'react';
import '../../App.css';
import Banner from '../Banner'
import { Route, Switch } from 'react-router-dom';
import CartItems from './CartItems';
import Total from './Total';
import Recommended from './Recommended';

function Cart(props) {
  const cartItems = props.cartItems.map(product => {
    return (
      <Switch key={product.id}>
        <Route
          exact
          path={`/cart/edit/${product.id}`}
          render={({ history }) => (
            <CartItems
              onEdit={props.onEdit}
              product={product}
              history={history}
            />
          )}
        />
        <Route
          render={() => (
            <CartItems
              onDelete={props.onDelete}
              product={product}
            />
          )}
        />
      </Switch>
    )
  });

  const recommendedItems = props.recommended.map(product => {
    return (
      <Recommended
        key={product.id}
        product={product}
      />
    )
  })

  return (
    <div>
    <div className="flex-container">
        <Banner
          image="https://images.unsplash.com/photo-1448842215777-02928daa9d5f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1a7d075fc685e063a6e6777118cce522&auto=format&fit=crop&w=2464&q=80"
          text="Shopping Cart"
        />
        </div>
    <div className="cart-container">
      <div className="left-cart">
        <h3>Shopping Cart:</h3>
        {cartItems}
      </div>
      <div className="right-cart">
        <Total
          total={props.total}
          cartItems={props.cartItems}
          onUpdate={props.onUpdate}
        />
        <h3>Recommended Items:</h3>
        <div className="recommended-container">
          {recommendedItems}
        </div>
      </div>
    </div>
    </div>
    </div>


  )
}

export default Cart;
