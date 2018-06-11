import React, { Component } from 'react';
import ProductForm from './ProductForm';

class ProductFormSetup extends Component {

  render() {
    return(
      <ProductForm
        onSubmit={this.props.onSubmit}
        categories={this.props.categories}
        states={this.props.states}
        user={this.props.user}
      />
    );
  }
}

export default ProductFormSetup;
