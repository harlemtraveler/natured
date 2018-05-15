import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Categories from './components/categories/Categories';
import About from './components/About';
import Login from './components/auth/Login';
import {
   getQuotes,
   createQuote,
   deleteQuote,
  updateQuote,
  login
 } from './services/apiService';
import Register from './components/auth/Register';
import Cart from './components/cart/Cart';
import Sell from './components/Sell';
import Products from './components/products/Products';
import ProductsView from './components/products/ProductsView';
import Footer from './components/Footer';
import { login, register } from './services/auth';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      products: [],
      cart: [],
      total: 0,
      recommended: [],
      user: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
<<<<<<< HEAD
    this.handleLogin = this.handleLogin.bind(this);
=======
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
>>>>>>> ee894b0c0fb8dd8c8c28ee4c683e677d62e7f319
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
      if (!resp.ok) throw new Error('There was an error');
      return resp.json();
    })
    .then(data => {
      this.setState({
        cart: data.contents
      })
    })
  }

  fetchOrderTotal() {
    fetch(`/api/cart/total/${this.state.user.id}`)
    .then(resp => {
      if (!resp.ok) throw new Error('There was an error');
      return resp.json();
    })
    .then(data => {
      let sum = data.contents[0].sum;
      if(sum === null) {
        sum = 0;
      }
      this.setState({
        total: sum
      })
    })
  }

  fetchRecommended() {
    fetch('/api/products/recommended')
    .then(resp => {
      if (!resp.ok) throw new Error('There was an error');
      return resp.json()
    })
    .then(respBody => {
      this.setState({
        recommended: respBody.contents
     })
    });
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
    .then(respBody => {
      this.updateCart();
    })
  }

  deleteFromCart(productId) {
    fetch(`/api/cart/${this.state.user.id}/${productId}`, {
      method: 'DELETE'
    })
    .then(resp => {
      if (!resp.ok) throw new Error('There was an error');
      return resp.json();
    })
    .then(respBody => {
      this.updateCart();
    })
  }

  editCart(info) {
    const options = {
      method: 'PUT',
      body: JSON.stringify(info),
      headers: {
        'content-type': 'application/json'
      }
    }

    fetch(`/api/cart/${this.state.user.id}/${info.product_id}`,
      options)
    .then(resp => {
      if (!resp.ok) throw new Error('There was an error');
      return resp.json();
    })
    .then(respBody => {
      this.updateCart();
    })
  }

  updateProductAfterCheckout(product) {
    const options = {
      method: 'PUT',
      body: JSON.stringify(product),
      headers: {
        'content-type': 'application/json'
      }
    }
    const userId = this.state.user.id;
    const productId = product.product_id;
    fetch(`/api/cart/${userId}/update/${productId}`, options)
    .then(resp => {
      if (!resp.ok) throw new Error('There was an error');
      return resp.json();
    })
    .then(() => {
      this.deleteFromCart(product.id);
      this.fetchProducts();
      this.fetchRecommended();
    })
  }

  updateCart() {
    this.fetchCartItems();
    this.fetchOrderTotal();
  }

  handleSubmit(info) {
    this.addToCart(info);
  }

  handleDelete(id) {
    this.deleteFromCart(id);
  }

  handleEdit(info) {
    this.editCart(info);
  }

  handleUpdate(info) {
    this.updateProductAfterCheckout(info);
  }

  selectCategory(category) {
    const index = this.state.categories.findIndex(aCategory => aCategory.category.toLocaleLowerCase() === category);
    return this.state.categories[index];
  }

  handleLogin(creds) {
    login(creds)
    .then(user => this.setState({user}))
  }

  handleRegister(creds) {
    register(creds)
    .then(user => this.setState({user}))
  }

  componentDidMount() {
    this.fetchProducts();
    this.fetchCategories();
    //this.updateCart();

    this.fetchRecommended();
    if(this.state.user) {
      this.updateCart();
    }
  }

  render() {
    return (
    /*each category image will be mapped through to create a individual flex items that link to all products
    for that specific category*/
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
                render={({ match, history }) => (
                  <ProductsView
                    match={match}
                    onSubmit={this.handleSubmit}
                    history={history}
                  />
                )} />
            </Switch>
            <Route path="/all" render={({ match }) => (
              <Products
                match={ match }
                viewAll={this.state.products}
                category={this.state.categories}
              />)}
            />
            <Route path="/about" render={() => (<About/>)} />
            <Route path="/login" render={({ history }) => (
              <Login
                history={history}
                onSubmit={this.handleLogin}
              />)}
            />
            <Route path="/register" render={({ history }) => (
              <Register
                history={history}
                onSubmit={this.handleRegister}
              />)}
            />
            <Route
              path="/cart"
              render={({ history }) => (
                <Cart
                  cartItems={this.state.cart}
                  total={this.state.total}
                  recommended={this.state.recommended}
                  onDelete={this.handleDelete}
                  onEdit={this.handleEdit}
                  onUpdate={this.handleUpdate}
                  history={history}
                  user={this.props.user}
                />
              )}
            />
            <Route path="/sell" render={({ history }) => (
              <Sell
                user={this.state.user}
                history={history}
              />)}
            />
            <Route path="/:id" render={() => (<Footer/>)} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
