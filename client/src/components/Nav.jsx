import React from 'react';

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
        <a href="/categories">
        <img src="https://i.imgur.com/Sgc4hu9.jpg">
          </img>
          </a>
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
