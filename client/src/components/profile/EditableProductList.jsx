import React, { Component } from 'react';
import EditableProduct from './EditableProduct';

class EditableProductList extends Component {
  render() {
    const products = this.props.products.map((product) => (
      <EditableProduct
        key={product.id}
        id={product.id}
        img_url={product.img_url}
        title={product.title}
        description={product.description}
        onFormSubmit={this.props.onFormSubmit}
        onTrashClick={this.props.onTrashClick}
      />
    ));
    return(
      <div id="products">
        {products}
      </div>
    );
  }
}

export default EditableProductList;
