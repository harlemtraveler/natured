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
    return (
      <div className="flex-container single-product">
        <div>
          <div style={imgStyle} className="product-image"></div>
        </div>
        <div className="product-info">
          <h1>{this.state.product.name}</h1>
          <p>{this.state.product.description}</p>
        </div>
      </div>
    )
  }
}

export default ProductsView;
