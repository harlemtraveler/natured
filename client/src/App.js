import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Categories from './components/categories/Categories';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Apply from './Apply';
import Login from './components/auth/Login';
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
      userProducts: [],
      cart: [],
      states: [],
      total: 0,
      recommended: [],
      user: {
        email: "testing@g.co",
        iat: 1526396691,
        id: 1,
        username: "gjames"
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.createProduct = this.createProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
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

  fetchStates() {
    fetch('/api/states')
    .then(resp => {
      if (!resp.ok) throw new Error('There was an error');
      return resp.json()
    })
    .then(respBody => {
      this.setState({
        states: respBody.contents
      })
    })
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

  fetchUserProducts() {
    fetch(`/api/products/user/${this.state.user.id}`)
    .then(resp => {
      if (!resp.ok) throw new Error('There was an error');
      return resp.json()
    })
    .then(respBody => {
      this.setState({
        userProducts: respBody.contents
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

  createProduct(product) {
    const options = {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'content-type': 'application/json'
      }
    }

    fetch('api/products', options)
    .then(resp => {
      if (!resp.ok) throw new Error('There was an error');
      return resp.json();
    })
    .then(respBody => {
      this.fetchProducts();
      this.fetchUserProducts();
    })
  }

  deleteProduct(id) {
    fetch(`/api/products/${id}`, {method: 'DELETE'})
    .then(resp => {
      if (!resp.ok) throw new Error('There was an error');
      return resp.json()
    })
    .then(() => {
      this.fetchProducts();
      this.fetchUserProducts();
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
    .catch(err => {
      console.log('err');
    })
  }

  handleRegister(creds) {
    register(creds)
    .then(user => this.setState({user}))
  }

  componentDidMount() {
    this.fetchProducts();
    this.fetchUserProducts();
    this.fetchCategories();
    this.fetchRecommended();
    this.fetchStates();
    if(this.state.user) {
      this.updateCart();
    }
  }

  render() {
    return (
    // each category image will be mapped through to create a individual flex items that link to all products
    // for that specific category
      <Router>
        <div>
          <main>
            <Route exact path="/" render={() => (<Landing />)} />
            <Route path="/:id" render={() => (<Nav user={this.state.user}/>)} />
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
            <Route path="/contact" render={() => (<Contact/>)} />
            <Route path="/faq" render={() => (<FAQ/>)} />
            <Route path="/apply" render={() => (<Apply/>)} />
            <Route path="/login" render={({ history }) => (
              <Login
                user={this.state.user}
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
                userProducts={this.state.userProducts}
                states={this.state.states}
                categories={this.state.categories}
                user={this.state.user}
                onSubmit={this.createProduct}
                onDelete={this.deleteProduct}
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
