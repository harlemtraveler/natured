import React, { Component } from 'react';
import EditableProductList from './EditableProductList';
import ToggleableProductForm from './ToggleableProductForm';

class ProductDashboard extends Component {
  state = {
    products: [
      {
        id: 'uuid.v4()',
        img_url: 'https://imgur.com/f9ubYZX',
        title: 'Kitten',
        description: 'Just a cute kitten, gotta get a dog',
      },
    ],
  };

  handleCreateFormSubmit = (product) => {
    this.createProduct(product);
  };

  handleEditFormSubmit = (attrs) => {
    this.updateProduct(attrs);
  };

  handleTrashClick = (ProductId) => {
    this.deleteProduct(ProductId);
  }

  createProduct = (product) => {
    console.log(product);
  };

  updateProduct = (attrs) => {
    this.setState({
      products: this.state.products.map((product) => {
        if (product.id === attrs.id) {
          return Object.assign({}, product, {
            img_url: attrs.img_url,
            title: attrs.title,
            description: attrs.description,
          });
        } else {
          return product;
        }
      }),
    });
  };

  deleteProduct = (ProductId) => {
    this.setState({
      products: this.state.products.filter(t => t.id !== ProductId),
    });
  }

  render() {
    return(
      <div className="ui three column centered grid">
        <div className="column">
          <EditableProductList
            products={this.state.products}
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}
          />
          <ToggleableProductForm
            onFormSubmit={this.handleCreateFormSubmit}
          />
        </div>
      </div>
    );
  }
}

export default ProductDashboard;
