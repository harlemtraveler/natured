import React, { Component } from "react";
import '../../App.css';
import Banner from '../Banner';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };

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
      email: '',
      password: ''
    })
    this.props.history.push('/categories');
  }

  render() {
    return (
      <div className="flex-container">
        <Banner
          image="https://images.unsplash.com/photo-1523977761705-9893a1663a93?ixlib=rb-0.3.5&s=be6bd1164454bdcfeae5f4cd499ac90c&auto=format&fit=crop&w=2550&q=80"
          text="Register"
        />
      <div className="login menu-links-padding">
      <h1>Register for an Account</h1>
      <p>Already have an account? Please click <a href="/register">here<br/> to login instead.</a></p>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            required
            type="username"
            value={this.state.username}
            onChange={this.handleChange}
            name="username"
            id="username"
          />
        </div>
        <br/>
        <div>
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            id="email"
          />
        </div>
        <br/>
        <div>
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
            id="password"
          />
        </div>
        <br/>
        <br/>
        <button className="submit">Create Account</button>
      </form>
      </div>
      <div className="help flex-item help-text">
      <h1>Need Help?</h1>
      <div>
      <p className="help-text">Please refer to our <a href="/faq" className="link-highlight">
        <span className="link-highlight">Frequently Asked Questions</span>
          </a> or contact
        <a href="/contact"><span className="link-highlight"> Customer Service</span></a> and we'll gladly help.</p></div>
      </div>
      </div>
    )
  }
}
