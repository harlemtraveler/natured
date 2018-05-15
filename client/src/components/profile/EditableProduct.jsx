import React, { Component } from 'react';
import ProductForm from './ProductForm';
import Product from './Product';

class EditableProduct extends Component {
  state = {
    editFormOpen: false,
  }

  handleEditClick = () => {
    this.openForm();
  };

  handleFormClose = () => {
    this.closeForm();
  };

  handleSubmit = (product) => {
    this.props.onFormSubmit(product);
    this.closeForm();
  };

  closeForm = () => {
    this.setState({ editFormOpen: false });
  };

  openForm = () => {
    this.setState({ editFormOpen: true });
  };

  render() {
    if(this.state.editFormOpen) {
      return(
        <ProductForm
          id={this.props.id}
          img_url={this.props.img_url}
          title={this.props.title}
          description={this.props.description}
        />
      );
    } else {
      return(
        <Product
          id={this.props.id}
          onEditClick={this.handleEditClick}
          onTrashClick={this.props.onTrashClick}
        />
      );
    }
  }
}

export default EditableProduct;
