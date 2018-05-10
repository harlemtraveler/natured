import React, { Component } from 'react';
import {grey900} from 'material-ui/styles/colors';
import {fullWhite} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar';
import '../App.css'

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    }
  }

 render() {

 const muiTheme = getMuiTheme ({
  palette: {
    textColor: grey900
  },
  appBar: {
    height: 125,
    color: fullWhite
  }
});

   return (
// each category image will be mapped through to create a individual flex items that link to all products
// for that specific category
<MuiThemeProvider muiTheme={muiTheme}>
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
<div class="flex-container">
<div className="feature-text"><h1>ANDES MOUNTAINS</h1></div>
<div style={{backgroundImage: `url(https://images.unsplash.com/photo-1485745352553-859d7a306fbd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d57b648befb46f55dfd0fb04ae51d4e3&auto=format&fit=crop&w=1050&q=80)`} } className="feature-header">
</div>

<a href="/hiking/all">
<div class="flex-item">
<div style={{backgroundImage: `url(https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa6e65fcad07b9a68420c430034f84f2&auto=format&fit=crop&w=1050&q=80)`} } className="category-header">
</div>
</div>
</a>


<h1 className="category-name"></h1>
<a href="/hiking/all">
<div class="flex-item">
<div style={ {backgroundImage: `url(https://images.unsplash.com/photo-1485967249725-2d0b975fa8a2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4e0d1edffbad88072bb38ac3e67dbc24&auto=format&fit=crop&w=2550&q=80)`} } className="category-header">
</div>
</div>
</a>

<a href="/running/all">
<div class="flex-item">
<div style={ {backgroundImage: `url(https://images.unsplash.com/photo-1489899386118-f4b931edf195?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7564d72d8ce8a1d80da4f40e97b9fe2c&auto=format&fit=crop&w=2468&q=80)`} } className="category-header">
</div>
</div>
</a>

<a href="/running/all">
<div class="flex-item">
<div style={ {backgroundImage: `url(https://images.unsplash.com/photo-1474623809196-26c1d33457cc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43c908728ab8df488716426562f8c8e4&auto=format&fit=crop&w=967&q=80)`} } className="category-header">
</div>
</div>
</a>

<a href="/fishing/all">
<div class="flex-item">
<div style={ {backgroundImage: `url(https://images.unsplash.com/photo-1449158672805-f0deda6782ec?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2f894314238c035a86957377bb53418&auto=format&fit=crop&w=967&q=80)`} } className="category-header">
</div>
</div>
</a>

<a href="/rockclimbing/all">
<div class="flex-item">
<div style={ {backgroundImage: `url(https://images.unsplash.com/photo-1485975789056-ad4d1fd01742?ixlib=rb-0.3.5&s=bf127145cfd81d267399a1029b864ab1&auto=format&fit=crop&w=2468&q=80)`} } className="category-header">
</div>
</div>
</a>

<a href="/rockclimbing/all">
<div class="flex-item">
<div style={ {backgroundImage: `url(https://images.unsplash.com/photo-1492633030546-6236e2bf198e?ixlib=rb-0.3.5&s=1b13e2fee97377082b5f3d41f5719ac9&auto=format&fit=crop&w=666&q=80)`} } className="category-header">
</div>
</div>
</a>
</div>
</MuiThemeProvider>
    );
  }
}

export default Categories;
