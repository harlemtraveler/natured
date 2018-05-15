import React, { Component } from 'react';
import ProductForm from './ProductForm';

class ToggleableProductForm extends Component {
  state={
    isOpen: false,
  };

  handleFormOpen = () => {
    this.setState({ isOpen: true });
  };

  handleFormClose = () => {
    this.setState({ isOpen: false });
  };

  handleFormSubmit = (product) => {
    this.props.onFormSubmit(product);
    this.setState({ isOpen: false });
  };

  render() {
    if(this.state.isOpen) {
      return(
        <ProductForm
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return(
        <div className="ui basic content center aligned segment">
          <button
            className="ui basic button icon"
            onClick={this.handleFormOpen}
          >
            <i className="plus icon" />
          </button>
        </div>
      );
    }
  }
}

export default ToggleableProductForm;
