import React, { Component } from "react";


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      email: '',
      password: ''
    })
    this.props.history.push('/categories');
  }

  render() {
    return (
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
  }
}
