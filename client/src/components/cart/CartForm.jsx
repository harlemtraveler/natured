import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edited: {
        product_id: this.props.product.id,
        quantity: '1'
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onEdit(this.state.edited);
    console.log(this.state.edited.quantity);
  }

  handleChange(e) {
    const editedProduct = this.state.edited;
    editedProduct[e.target.name] = e.target.value;
    this.setState({
      add: editedProduct
    })
  }

  render() {
    const { product } = this.props;

    const imgUrl = {
      width: '150px',
      height: '150px',
      backgroundImage: `url(${product.img_url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'left center'
    }

    const options = Array(product.stock).fill(0).map((quantity, i) => {
      return (
        <option key={i}>{i + 1}</option>
      )
    });

    return (
      <div className="cart">
        <div>
          <div style={imgUrl}></div>
        </div>
        <div className="cart-product-info">
          <h4>{product.name} ---- ${product.price}</h4>
          <p>{product.description}</p>
          <form onSubmit={this.handleSubmit}>
            <div className="edit-quantity">
              <label htmlFor="quantity">Quantity:</label>
              <select
                name="quantity"
                value={this.state.edited.quantity}
                onChange={this.handleChange}
              >
                {options}
              </select>
            </div>
            <Link to="/cart">Cancel</Link>
            <button value="submit">Update Quantity</button>
          </form>
        </div>
      </div>
    )
  }
}

export default CartForm;
