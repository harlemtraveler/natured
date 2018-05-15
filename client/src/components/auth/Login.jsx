import React, { Component } from "react";
import '../../App.css';
import Banner from '../Banner';


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
      <div className="flex-container">
        <Banner
          image="https://images.unsplash.com/photo-1416949929422-a1d9c8fe84af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ebb23f3716110f89b4cadcd7b243b3e9&auto=format&fit=crop&w=2702&q=80"
          text="Login"
        />
      <div className="login menu-links-padding">
      <h1>Login</h1>
      <p>Need to create a profile? Please click <a href="/register">here to register.</a></p>
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
      </div>
    );
  }
}
