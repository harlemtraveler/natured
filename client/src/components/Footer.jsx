import React, { Component } from 'react';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    quote: ""
  }

    this.getQuote = this.getQuote.bind(this);
  }

 getQuote() {
=======
 function Footer(props) {
   function getQuote() {
>>>>>>> cf9b2a2ea8e369c32b23a5f39d07c3d8af54417c
      const url = `http://quotes.rest/qod.json?category=inspire`;
      fetch(url)
      .then((resp) => resp.json())
      .then(data => {
      console.log(data.contents.quotes[0].quote)
      this.setState({
        quote: data.contents.quotes[0].quote
      })
    })
  }

  componentDidMount() {
    this.getQuote();
  }
render () {
return (
  <div className="footer nav">
  <p>{this.state.quote}</p>
  <div className="wrapper">
        <ul>
           <li><a href="/about">About</a></li>
          <li>Contact Us</li>
        </ul>
        <div className="logo">
            <Link to="/categories">
              <img src="https://i.imgur.com/Sgc4hu9.jpg" alt="Nature`D" />
            </Link>
          </div>
          <ul>
          <li className="nav-right space-right"><a href="/categories">WORK FOR US</a></li>
          <li className="nav-right"><a href="/sell">FAQ</a></li>
        </ul>
          </div>
      </div>
      )
  }
}

export default Footer;
