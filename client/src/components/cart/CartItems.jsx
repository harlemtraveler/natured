import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartForm from './CartForm';

class CartItems extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.onDelete(this.props.product.id);
  }

  render() {
    const { product } = this.props;

    const imgUrl = {
      backgroundImage: `url(${product.img_url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'left center'
    }

    return (
      <div className="cart">
        <div>
          <div className="cart-img" style={imgUrl}></div>
        </div>
        <div className="cart-product-info">
          <h4>{product.name} ---- ${product.price}</h4>
          <p>{product.description}</p>
          {this.props.onDelete ? (
            <div>
              <p>Quantity: x{product.quantity}</p>
              <Link className="links" to={`/cart/edit/${product.id}`}>Edit Quantity</Link>
              <button className="links" onClick={this.handleDelete}>Delete From Cart</button>
            </div>
          ) : (
            <CartForm
              onEdit={this.props.onEdit}
              product={product}
              history={this.props.history}
            />
          )}
        </div>
      </div>
    )
  }
}

export default CartItems;
