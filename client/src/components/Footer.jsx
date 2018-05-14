import React from 'react';
import { Link } from 'react-router-dom';

 function Footer(props) {


   function getQuote() {
      const url = `http://quotes.rest/qod.json?category=inspire`;
      fetch(url)
      .then((resp) => resp.json())
      .then(function(data) {
      console.log(data.contents.quotes[0].quote)
      return data.contents
    })
  }

  function componentDidMount() {
    this.getQuote();
  }

return (
  <div className="footer nav">.jsx
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
          <p>{getQuote()}</p>
        </ul>
          </div>
      </div>
      )
  }

export default Footer;
