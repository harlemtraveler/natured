import React, { Component } from 'react';

class ProductsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: []
    }

    this.fetchProduct = this.fetchProduct.bind(this);
  }

  fetchProduct() {
    fetch(`/api/products/${this.props.match.params.id}`)
    .then(resp => {
      if(!resp.ok) throw new Error('There was an error');
      return resp.json();
    })
    .then(data => {
      this.setState({
        product: data.contents
      })
    })
  }

  componentDidMount() {
    this.fetchProduct();
  }

  render() {
    const imgStyle = {
      height: '400px',
      backgroundImage: `url(${this.state.product.img_url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }

    const options = Array(this.state.product.stock).fill(0).map((quantity, i) => {
      return (
        <option key={i}>{i + 1}</option>
      )
    });

    return (
      <div className="flex-container single-product">
        <div>
          {this.state.product.img_url && <div style={imgStyle} className="product-image"></div>}
        </div>
        <div className="product-info">
          <div>
            <h1>{this.state.product.name}</h1>
            <p>{this.state.product.description}</p>
            <h4 className="location">Located in {this.state.product.state}</h4>
          </div>
          <div>
            <h3 className="price">Price: ${this.state.product.price}</h3>
            <div>
              <label htmlFor="stock">Quantity:</label>
              <select>
                {options}
              </select>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductsView;
