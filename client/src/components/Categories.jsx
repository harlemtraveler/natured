import React, { Component } from 'react';
import {grey900} from 'material-ui/styles/colors';
import {fullWhite} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import '../App.css';
import Category from './Category';
import Banner from './Banner';

class App extends Component {
  constructor(props) {
    super(props);
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

    const categories = this.props.categories.map(category => {
      return (
        <Category
          key={category.id}
          category={category.categories}
          image={category.img_url}
        />
      )
    });

    return (
      // each category image will be mapped through to create a individual flex items that link to all products
      // for that specific category
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <div className="flex-container">
            <Banner
              image="https://images.unsplash.com/photo-1485745352553-859d7a306fbd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d57b648befb46f55dfd0fb04ae51d4e3&auto=format&fit=crop&w=1050&q=80"
              text="Andes Mountains"
            />
            {categories}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
