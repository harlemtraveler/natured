import React from 'react';
import { Link } from 'react-router-dom';


 function Footer(props) {
   function getQuote() {
    const url = `http://quotes.rest/qod.json?category=inspire`;
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      return data.contents
    })
  }

  return (
    <div className="footer nav">
      <div className="wrapper">
        <ul>
           <li><Link to="/about">About</Link></li>
          <li>Contact Us</li>
        </ul>
        <div className="logo">
          <Link to="/categories">
            <img src="https://i.imgur.com/Sgc4hu9.jpg" alt="Nature`D" />
          </Link>
        </div>
        <ul>
          <li className="nav-right space-right"><Link to="/categories">WORK FOR US</Link></li>
          <li className="nav-right"><Link to="/sell">FAQ</Link></li>
          <p>{getQuote()}</p>
        </ul>
      </div>
    </div>
  )
}

export default Footer;
