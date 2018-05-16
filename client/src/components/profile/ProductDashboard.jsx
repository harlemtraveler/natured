import React, { Component } from 'react';
import EditableProductList from './EditableProductList';
import ProductFormSetup from './ProductFormSetup';

class ProductDashboard extends Component {
  constructor(props) {
    super(props);
    this.handleCreateFormSubmit = this.handleCreateFormSubmit.bind(this);
  }

  handleCreateFormSubmit(product) {
    this.props.onSubmit(product);
  };

  handleEditFormSubmit = (attrs) => {
    this.updateProduct(attrs);
  };

  handleTrashClick = (ProductId) => {
    this.deleteProduct(ProductId);
  }

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
        <div className="parent">
          <ProductFormSetup
            states={this.props.states}
            categories={this.props.categories}
            onSubmit={this.handleCreateFormSubmit}
            user={this.props.user}
          />
          <EditableProductList
            products={this.props.userProducts}
            states={this.props.states}
            categories={this.props.categories}
            user={this.props.user}
            onDelete={this.props.onDelete}
          />
        </div>
      </div>
    )
  }
}

export default ProductDashboard;
