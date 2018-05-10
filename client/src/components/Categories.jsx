import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Category from './Category';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      backgrounds: []
    }
  }

  fetchCategories() {
    fetch('/api/')
  }

  generateBackgrounds() {
    const backgroundArray = [
      'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa6e65fcad07b9a68420c430034f84f2&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1485967249725-2d0b975fa8a2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4e0d1edffbad88072bb38ac3e67dbc24&auto=format&fit=crop&w=2550&q=80',
      'https://images.unsplash.com/photo-1489899386118-f4b931edf195?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7564d72d8ce8a1d80da4f40e97b9fe2c&auto=format&fit=crop&w=2468&q=80',
      'https://images.unsplash.com/photo-1474623809196-26c1d33457cc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43c908728ab8df488716426562f8c8e4&auto=format&fit=crop&w=967&q=80'
    ];

    this.setState({
      backgrounds: backgroundArray
    })
  }

  componentDidMount() {
    this.generateBackgrounds();
  }

  render() {
    const menuWidth = {
      height: 125,
      backgroundColor: 'grey',
    }

    return (
    // each category image will be mapped through to create a individual flex items that link to all products
    // for that specific category

      <MuiThemeProvider>
        <div>
          <AppBar title="Nature'D" style={menuWidth} className="nav"><i className="material-icons">add_shopping_cart</i>
            <i className="material-icons">search</i>
          </AppBar>
          <div className="flex-container">

            <a href="/hiking/all">
              <div className="flex-item">
                <div style={{backgroundImage: `url(${this.state.backgrounds[0]})`} } className="category-header">
                </div>
              </div>
            </a>

            <a href="/hiking/all">
              <div className="flex-item">
                <div style={ {backgroundImage: `url(${this.state.backgrounds[1]})`} } className="category-header">
                </div>
              </div>
            </a>

            <a href="/running/all">
              <div className="flex-item">
                <div style={ {backgroundImage: `url(${this.state.backgrounds[2]})`} } className="category-header">
                </div>
              </div>
            </a>

            <a href="/running/all">
              <div className="flex-item">
                <div style={ {backgroundImage: `url(${this.state.backgrounds[3]})`} } className="category-header">
                </div>
              </div>
            </a>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Categories;
