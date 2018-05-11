import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Landing from './components/Landing';
import Categories from './components/Categories';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import FAQ from './components/FAQ';
import Sell from './components/Sell';

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
          <Route exact path="/about" render={() => (<About/>)} />
          <Route exact path="/login" render={() => (<Login/>)} />
          <Route exact path="/register" render={() => (<Register/>)} />
          <Route exact path="/FAQ" render={() => (<FAQ/>)} />
          <Route exact path="/sell" render={() => (<Sell/>)} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
