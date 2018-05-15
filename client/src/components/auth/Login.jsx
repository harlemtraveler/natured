<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React, { Component } from "react";
>>>>>>> ee894b0c0fb8dd8c8c28ee4c683e677d62e7f319

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
<<<<<<< HEAD
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
=======

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
>>>>>>> ee894b0c0fb8dd8c8c28ee4c683e677d62e7f319
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      email: '',
      password: ''
<<<<<<< HEAD
    });
=======
    })
    this.props.history.push('/categories');
>>>>>>> ee894b0c0fb8dd8c8c28ee4c683e677d62e7f319
  }

  render() {
    return (
<<<<<<< HEAD
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input
            type='text'
            onChange={this.handleInputChange}
            value={this.state.email}
            name='email'
          />
        </label>
        <label>
          Password:
          <input
            type='password'
            onChange={this.handleInputChange}
            value={this.state.password}
            name='password'
          />
        </label>
        <button type='submit'>Login</button>
      </form>
    )
=======
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
>>>>>>> ee894b0c0fb8dd8c8c28ee4c683e677d62e7f319
  }
}

export default Login;
