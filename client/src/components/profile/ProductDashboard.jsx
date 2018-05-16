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
            onSubmit={this.props.onEdit}
            onDelete={this.props.onDelete}
          />
        </div>
      </div>
    )
  }
}

export default ProductDashboard;
