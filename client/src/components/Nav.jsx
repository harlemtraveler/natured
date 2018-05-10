import React from 'react';
import AppBar from 'material-ui/AppBar';

function Nav(props) {
  return(
    <AppBar className="nav">
      <ul>
        <li>ABOUT</li>
        <li>LOGIN</li>
        <li>REGISTER</li>
      </ul>
      <div className="separator">
      </div>
      <div className="logo"><img src="https://i.imgur.com/Sgc4hu9.jpg">
      </img>
      </div>
      <ul>
        <li className="nav-right space-right">SHOP</li>
        <li className="nav-right">SELL</li>
        <li className="nav-right">FAQ</li>
      </ul>
    </AppBar>
  )
}

export default Nav;
