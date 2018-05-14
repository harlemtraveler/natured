import React from 'react';

function Total(props) {
  return (
    <div className="total">
      <h3>Order Total: ${props.total}</h3>
      <button>Checkout</button>
    </div>
  )
}

export default Total;
