import React, { Component } from 'react';

class ProductsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
      add: {
        product_id: this.props.match.params.id,
        quantity: '1'
      }
    }

    this.fetchProduct = this.fetchProduct.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const addedProduct = this.state.add;
    addedProduct[e.target.name] = e.target.value;
    this.setState({
      add: addedProduct
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addToCart(this.state.add)
    console.log('hi');
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
      backgroundPosition: 'left'
    }

    const options = Array(this.state.product.stock).fill(0).map((quantity, i) => {
      return (
        <option key={i}>{i + 1}</option>
      )
    });

    return (
      <div className="single-product">
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
            <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="quantity">Quantity:</label>
              <select
                name="quantity"
                value={this.state.add.quantity}
                onChange={this.handleChange}
              >
                {options}
              </select>
            </div>
            <button value="submit">Add to Cart</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductsView;
