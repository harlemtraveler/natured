import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
  return(
    <div className="nav">
      <div className="wrapper">
        <ul>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
          <li><Link to="/register">REGISTER</Link></li>
        </ul>
        <div className="logo">
          <Link to="/categories">
            <img src="https://i.imgur.com/Sgc4hu9.jpg" alt="Nature`D" />
          </Link>
        </div>
        <ul>
          <li className="nav-right space-right"><Link to="/categories">SHOP</Link></li>
          <li className="nav-right"><Link to="/sell">SELL</Link></li>
          <li className="nav-right"><Link to="/cart">CART</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav;
