import React from 'react';
import { Link } from 'react-router-dom';

function CartItems(props) {
  console.log(props);
  const imgUrl = {
    width: '150px',
    height: '150px',
    backgroundImage: `url(${props.product.img_url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'left center'
  }

  return (
    <div className="cart">
      <div>
        <div style={imgUrl}></div>
      </div>
      <div className="cart-product-info">
        <h4>{props.product.name} ---- ${props.product.price}</h4>
        <p>{props.product.description}</p>
        <p>Quantity: x5</p>
        <Link to="/edit">Edit Purchase</Link>
        <button>Delete From Cart</button>
      </div>
    </div>
  )
}

export default CartItems;
