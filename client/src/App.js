import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Categories from './components/categories/Categories';
import About from './components/About';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Cart from './components/cart/Cart';
import Sell from './components/Sell';
import Products from './components/products/Products';
import ProductsView from './components/products/ProductsView';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      products: [],
      cart: [],
      user: {
        id: 1
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
      if (!resp.ok) throw new Error('There was an error');
      return resp.json()
    })
    .then(respBody => {
      this.setState({
        categories: respBody.contents
     })
    });
  }

  fetchCartItems() {
    fetch(`/api/cart/${this.state.user.id}`)
    .then(resp => {
      if(!resp.ok) throw new Error('There was an error');
      return resp.json();
    })
    .then(data => {
      this.setState({
        cart: data.contents
      })
    })
  }

  addToCart(info) {
    const options = {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
        'content-type': 'application/json'
      }
    }

    fetch(`/api/cart/${this.state.user.id}`, options)
    .then(resp => {
      if(!resp.ok) throw new Error('There was an error');
      return resp.json();
    })
    .then(() => {
      console.log('hi');
    })
  }

  deleteFromCart(productId) {
    fetch(`/api/cart/${this.state.user.id}/${productId}`, {
      method: 'DELETE'
    })
    .then(resp => {
      if(!resp.ok) throw new Error('There was an error');
      return resp.json();
    })
    .then(respBody => {
      this.fetchCartItems();
    })
  }

  handleSubmit(info) {
    this.addToCart(info);
  }

  handleDelete(id) {
    this.deleteFromCart(id);
  }

  selectCategory(category) {
    const index = this.state.categories.findIndex(aCategory => aCategory.categories.toLocaleLowerCase() === category);
    return this.state.categories[index];
  }

  componentDidMount() {
    this.fetchProducts();
    this.fetchCategories();
    this.fetchCartItems();
  }

  render() {
    return (
    // each category image will be mapped through to create a individual flex items that link to all products
    // for that specific category
      <Router>
        <div>
          <main>
            <Route exact path="/" render={() => (<Landing />)} />
            <Route path="/:id" render={() => (<Nav />)} />
            <Switch>
              <Route
                exact
                path="/categories"
                render={() => (
                  <Categories categories={this.state.categories}/>
                )}
              />
              <Route
                exact
                path="/categories/:activity"
                render={({ match }) => (
                  <Products
                    match={ match }
                    category={this.selectCategory(match.params.activity)}
                    products={this.state.products}
                    view={this.singleView}
                  />
                )}
              />
              <Route
                path="/categories/:activity/:id"
                render={({ match }) => (
                  <ProductsView
                    match={ match }
                    onSubmit={this.handleSubmit}
                  />
                )} />
            </Switch>
            <Route path="/about" render={() => (<About/>)} />
            <Route path="/login" render={() => (<Login/>)} />
            <Route path="/register" render={() => (<Register/>)} />
            <Route
              path="/cart"
              render={() => (
                <Cart
                  cartItems={this.state.cart}
                  onDelete={this.handleDelete}
                />
              )}
            />
            <Route path="/sell" render={() => (<Sell/>)} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
