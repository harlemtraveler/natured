//import React, { Component } from 'react';

class ProductDashboard extends React.Component {
  state = {
    products: [
      {
        id: uuid.v4(),
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
    const t = helpers.newProduct(product);
    this.setState({
      products: this.state.products.concat(t),
    });
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

class ToggleableProductForm extends React.Component {
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

class EditableProductList extends React.Component {
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

class EditableProduct extends React.Component {
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

class Product extends React.Component {

  handleTrashClick = () => {
    this.props.onTrashClick(this.props.id);
  }

  //const headerStyle = {
  //  backgroundImage: `url('https://imgur.com/f9ubYZX')`
  //}
  render() {
    //const elapsedString = helpers.renderElapsedString(this.props.elapsed);
    return(
      <div className="ui centered card">
        <div className="content">
          <div
            className="header"
            //style={headerStyle}
          >
            {this.props.img_url}
          </div>
          <div className="meta">
            {this.props.title}
          </div>
          <div className="centered aligned description">
            {this.props.description}
          </div>
          <div className="extra content">
            <span
              className="right floated edit icon"
              onClick={this.props.onEditClick}
            >
              <i className="edit icon" />
            </span>
            <span
              className="right floated trash icon"
              onClick={this.handleTrashClick}
            >
              <i className="trash icon" />
            </span>
          </div>
        </div>
        <div className="ui bottom attached blue basic button">
          Details
        </div>
      </div>
    );
  }
}

class ProductForm extends React.Component {
  state = {
    img_url: this.props.img_url || '',
    title: this.props.title || '',
    description: this.props.description || '',
  };

  handleImageChange = (e) => {
    this.setState({ img_url: e.target.value });
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleDescriptionChange = (e) => {
    this.setState({ project: e.target.value });
  }

  handleSubmit = (e) => {
    this.props.onFormSubmit({
      id: this.props.id,
      img_url: this.state.img_url,
      title: this.state.title,
      project: this.state.project
    });
  };

  render() {
    const submitText = this.props.id ? 'Update' : 'Create';
    return(
      <div className="ui centered card">
        <div className="content">
          <div className="field">
            <label>Image URL</label>
            <input
              type="text"
              value={this.state.img_url}
              onChange={this.handleImageChange}
            />
          </div>
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleImageChange}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <input
              type="text"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            />
          </div>
          <div className="">
            <button className="ui basic blue button"
              onClick={this.handleSubmit}
            >
              {submitText}
            </button>
            <button className="ui basic red button"
              onClick={this.props.onFormClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <ProductDashboard />,
  document.getElementById('content')
);
