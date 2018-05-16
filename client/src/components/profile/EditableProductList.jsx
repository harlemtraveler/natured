import React, { Component } from 'react';
import EditableProduct from './EditableProduct';

class EditableProductList extends Component {
  render() {
    const products = this.props.products.map((product) => (
      <EditableProduct
        key={product.id}
        product={product}
        categories={this.props.categories}
        states={this.props.states}
        onDelete={this.props.onDelete}
      />
    ));

    return(
      <div id="products" className="all-seller-products">
        {products}
      </div>
    );
  }
}

export default EditableProductList;
