import React from 'react';

function Nav(props) {
  return(
    <div className="nav">
      <div className="wrapper">
        <ul>
          <li>ABOUT</li>
          <li>LOGIN</li>
          <li>REGISTER</li>
        </ul>
        <div className="logo"><img src="https://i.imgur.com/Sgc4hu9.jpg" alt="Nature`D">
        </img>
        </div>
        <ul>
          <li className="nav-right space-right">SHOP</li>
          <li className="nav-right">SELL</li>
          <li className="nav-right">FAQ</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav;
