import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    quote: ""
  }

    this.getQuote = this.getQuote.bind(this);
  }

 getQuote() {
  const url = `http://quotes.rest/qod.json?category=inspire`;
  fetch(url)
  .then((resp) => resp.json())
  .then(data => {
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
    <p className="quote-padding">{this.state.quote}</p>
    <div className="wrapper">
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="logo">
        <Link to="/categories">
          <img src="https://i.imgur.com/Sgc4hu9.jpg" alt="Nature`D" />
        </Link>
      </div>
      <ul>
        <li className="nav-right space-right"><Link to="/apply">WORK FOR US</Link></li>
        <li className="nav-right"><Link to="/faq">FAQ</Link></li>
      </ul>
    </div>
    </div>
  )
}
}

export default Footer;
