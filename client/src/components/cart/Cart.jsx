import React from 'react';
import '../../App.css';
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
        {recommendedItems}
      </div>
    </div>
  )
}

export default Cart;
