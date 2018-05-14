import React from 'react';
import { Link } from 'react-router-dom';

 function Footer(props) {
  return (
  <div class="footer nav">
  <div class="wrapper">
        <ul>
          <li>About Us</li>
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

export default Footer;
