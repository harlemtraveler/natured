import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileInformationCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      newPass: '',
      img_url: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <form>
        <div className="field">
          <label htmlFor="name">Name</label>
          <div>
            <input
              type="text"
              value={this.state.name}
              name="name"
              id="name"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <div>
            <input
              type="email"
              value={this.state.email}
              name="email"
              id="email"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="password">Current Password</label>
          <div>
            <input
              type="password"
              value={this.state.password}
              name="password"
              id="password"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="newPass">New Password</label>
          <p className="warning">Note: Leave blank if you don't want to change your current password</p>
          <div>
            <input
              type="password"
              value={this.state.newPass}
              name="newPass"
              id="newPass"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="img_url">Image URL</label>
          <div>
            <input
              type="text"
              value={this.state.img_url}
              name="img_url"
              id="img_url"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="button-container">
          <button className="links">Save</button>
          <Link to="/sell" className="links">Cancel</Link>
        </div>
      </form>
    )
  }
}

export default ProfileInformationCardForm;
