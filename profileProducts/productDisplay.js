function newProduct(attrs = {}) {
  const product = {
    id: uuid.v4(),
    img_url: attrs.img_url || 'https://images.unsplash.com/photo-1520285774798-2f1616131a68?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a2d5d974849f34da57c1eaac884b3c55&auto=format&fit=crop&w=1650&q=80',
    title: attrs.title || 'Product',
    description: attrs.project || 'Description',
  };

  return product;
}

class ProductDashboard extends React.Component {
  state = {
    products: [
      {
        id: uuid.v4(),
        img_url: 'https://images.unsplash.com/photo-1520285774798-2f1616131a68?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a2d5d974849f34da57c1eaac884b3c55&auto=format&fit=crop&w=1650&q=80',
        title: 'Kitten',
        description: 'Just a cute kitten, gotta get a dog',
      },
      {
        id: uuid.v4(),
        img_url: 'https://images.unsplash.com/photo-1520285774798-2f1616131a68?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a2d5d974849f34da57c1eaac884b3c55&auto=format&fit=crop&w=1650&q=80',
        title: 'puppy',
        description: 'Just a cute puppy!',
      },
      {
        id: uuid.v4(),
        img_url: 'https://imgur.com/f9ubYZX',
        title: 'elmo',
        description: 'Creeper Elmo',
      },
      {
        id: uuid.v4(),
        img_url: 'https://imgur.com/f9ubYZX',
        title: 'Jim Jones',
        description: 'Dipset',
      },
      {
        id: uuid.v4(),
        img_url: 'https://imgur.com/f9ubYZX',
        title: 'Kitten',
        description: 'Just a cute kitten, gotta get a dog',
      },
      {
        id: uuid.v4(),
        img_url: 'https://imgur.com/f9ubYZX',
        title: 'puppy',
        description: 'Just a cute puppy!',
      },
      {
        id: uuid.v4(),
        img_url: 'https://imgur.com/f9ubYZX',
        title: 'elmo',
        description: 'Creeper Elmo',
      },
      {
        id: uuid.v4(),
        img_url: 'https://imgur.com/f9ubYZX',
        title: 'Jim Jones',
        description: 'Dipset',
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
    const t = newProduct(product); //This function was originally puller from the helpers.js file
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
        <div className="parent">
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
      <div id="products" className="parent">
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
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
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

  render() {
    const picture = this.props.img_url || 'https://images.unsplash.com/photo-1520285774798-2f1616131a68?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a2d5d974849f34da57c1eaac884b3c55&auto=format&fit=crop&w=1650&q=80';
    const divStyle = {
      backgroundImage: `url(${picture})`
    };
    return(
      <div className="ui centered card">
        <div className="content">
          <div
            className="header"
            style={divStyle}
          >
            <img src={picture}></img>
          </div>
          <div className="meta">
            {this.props.title}
          </div>
          <div className="centered aligned description">
            {this.props.description}
          </div>
          <div className="extra content">
            <span
              className="right floated edit icon edit-icon"
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
        <div className="ui bottom attached blue basic button details-button">
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
    this.setState({ description: e.target.value });
  }

  handleSubmit = (e) => {
    this.props.onFormSubmit({
      id: this.props.id,
      img_url: this.state.img_url,
      title: this.state.title,
      description: this.state.description
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
              onChange={this.handleTitleChange}
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
