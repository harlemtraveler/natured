import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onDelete(this.props.product.id);
  }

  render() {
    const { product } = this.props;
    const img = {
      width: '100%',
      height: '200px',
      background: `url(${product.img_url})`,
      backgroundSize: 'cover'
    }

    return(
      <div className="seller-products">
        <div style={img}></div>
        <div>
          <h3 className="seller-name">{product.name}</h3>
          <p className="seller-description">{product.description}</p>
          <div className="details">
            <h4 className="headers detail-heading">Details</h4>
            <p><span className="headers">Price:</span> {product.price}</p>
            <p><span className="headers">Category:</span> {product.category}</p>
            <p><span className="headers">Stock:</span> {product.stock}</p>
            <p>Located in <span className="headers">{product.state}</span></p>
          </div>
        </div>
        <Link to={`/sell/product/edit/${product.id}`}>Update</Link>
        <button onClick={this.handleClick}>Delete</button>
      </div>
    );
  }
}

export default Product;
