import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
      name: '',
      description: '',
      price: '',
      category_id: 1,
      stock: '',
      img_url: '',
      state_id: 1
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      description: '',
      price: '',
      category_id: '',
      stock: '',
      img_url: '',
      state_id: ''
    })
  };

  componentDidMount() {
    if(this.props.user) {
      this.setState({
        user_id: this.props.user.id
      })
    } else {
      this.setState({
        name: this.props.product.name,
        description: this.props.product.description,
        price: this.props.product.price,
        category_id: this.props.product.category_id,
        stock: this.props.product.stock,
        img_url: this.props.product.img_url,
        state_id: this.props.product.state_id
      })
    }
  }

  render() {
    console.log(this.props.product);
    return(
      <div className="ui centered card">
        <div className="content">
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                required
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="description">Description</label>
              <input
                required
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="price">Price</label>
              <input
                required
                min="0"
                type="number"
                name="price"
                value={this.state.price}
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="category_id">Category</label>
              <select
                name="category_id"
                value={this.state.category_id}
                onChange={this.handleChange}
              >
                {this.props.categories.map(category => {
                  return (
                    <option
                      key={category.id}
                      value={category.id}
                    >
                      {category.category}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className="field">
              <label htmlFor="stock">Stock</label>
              <input
                required
                min="1"
                type="number"
                name="stock"
                value={this.state.stock}
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="img_url">Image URL</label>
              <input
                type="text"
                name="img_url"
                value={this.state.img_url}
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="state_id">State</label>
              <select
                name="state_id"
                value={this.state.state_id}
                onChange={this.handleChange}
              >
                {this.props.states.map(state => {
                  return (
                    <option
                      key={state.id}
                      value={state.id}
                    >
                      {state.state}
                    </option>
                  )
                })}
              </select>
            </div>
            {this.props.user ? (
              <button value="submit">Create</button>
            ) : (
              <div>
                <button value="submit">Save changes</button>
                <Link to="/sell">Cancel</Link>
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default ProductForm;
