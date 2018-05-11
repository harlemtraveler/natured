import React, { Component } from 'react';
import Banner from './Banner';
import Product from './Product';

class Products extends Component {
  render() {
    let products;

    if(this.props.category) {
      products = this.props.products.filter(
        prod => prod.category_id === this.props.category.id)
      .map(product => {
        return (
          <Product
            key={product.id}
            product={product}
            category={this.props.category}
          />
        )
      });
    }

    return (
      <div>
        {this.props.category && <Banner
          image={this.props.category.img_url}
          text={this.props.match.params.activity}
          />
        }
        <div className="flex-container products">
          {products}
        </div>
      </div>
    )
  }
}

export default Products;
