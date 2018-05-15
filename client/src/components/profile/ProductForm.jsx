import React, { Component } from 'react';

class ProductForm extends Component {
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

export default ProductForm;
