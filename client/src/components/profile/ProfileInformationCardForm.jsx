import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileInformationCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      newPass: ''
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
  }

  componentDidMount() {
    this.setState({
      name: this.props.name,
      email: this.props.email
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <div>
              <input
                required
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
                required
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
                required
                type="password"
                value={this.state.password}
                name="password"
                id="password"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="button-container">
            <button className="links" value="submit">Save</button>
            <Link to="/sell" className="links">Cancel</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default ProfileInformationCardForm;
