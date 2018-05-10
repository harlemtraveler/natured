import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Landing from './components/Landing';
import Categories from './components/Categories';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      products: []
    }
  }

  fetchProducts() {
    console.log('products');
  }

  fetchCategories() {
    fetch('/api/categories')
    .then(resp => {

      if (!resp.ok) throw new Error('There was an error AKA not ricardos fault');
      return resp.json()

    })
    .then(respBody => {
      this.setState({
        categories: respBody.contents
     })
    });
  }


  componentDidMount() {
    this.fetchProducts();
    this.fetchCategories();
  }

  render() {
    return (
    // each category image will be mapped through to create a individual flex items that link to all products
    // for that specific category
      <Router>
        <Switch>
          <Route exact path="/" render={() => (<Landing />)} />
          <Route exact path="/categories" render={() => (<Categories categories={this.state.categories}/>)} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
