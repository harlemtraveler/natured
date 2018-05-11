import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
  return(
    <div className="nav">
      <div className="wrapper">
        <ul>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/login">LOGIN</a></li>
          <li><a href="/register">REGISTER</a></li>
        </ul>
        <div className="logo">
          <Link to="/categories">
            <img src="https://i.imgur.com/Sgc4hu9.jpg" alt="Nature`D" />
          </Link>
        </div>
        <ul>
          <li className="nav-right space-right"><a href="/categories">SHOP</a></li>
          <li className="nav-right"><a href="/sell">SELL</a></li>
          <li className="nav-right"><a href="/FAQ">FAQ</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav;
