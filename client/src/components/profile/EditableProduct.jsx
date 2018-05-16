import React, { Component } from 'react';
import ProductForm from './ProductForm';
import Product from './Product';
import { Switch, Route } from 'react-router-dom';

class EditableProduct extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path={`/sell/product/edit/${this.props.product.id}`}
          render={() => (
            <ProductForm
              product={this.props.product}
              states={this.props.states}
              categories={this.props.categories}
            />
          )}
        />
        <Route
          render={() => (
            <Product
              product={this.props.product}
              onDelete={this.props.onDelete}
            />
          )}
        />
      </Switch>
    )
  }
}

export default EditableProduct;
