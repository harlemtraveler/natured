import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Categories from './components/Categories';
import Products from './components/Products'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      products: []
    }
  }

  fetchProducts() {
    fetch('/api/products')
    .then(resp => {
      if (!resp.ok) throw new Error('There was an error');
      return resp.json()
    })
    .then(respBody => {
      this.setState({
        products: respBody.contents
     })
    });
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

  selectCategory(category) {
    const selectedCategory = this.state.categories.findIndex(aCategory => aCategory.categories.toLocaleLowerCase() === category);
    return this.state.categories[selectedCategory];
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
        <div>
          <Route exact path="/" render={() => (<Landing />)} />
          <Route path="/:id" render={() => (<Nav />)} />
          <Switch>
            <Route exact path="/categories" render={() => (<Categories categories={this.state.categories}/>)} />
            <Route path="/categories/:activity" render={({ match }) => (<Products match={ match } category={this.selectCategory(match.params.activity)} products={this.state.products} />)} />
            <Redirect to="/categories" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
