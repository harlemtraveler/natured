import React from 'react';
import { Route, Link } from 'react-router-dom';
import ProductsView from './ProductsView';

function Product(props) {
  const category = props.category.categories.toLocaleLowerCase();
  const id = props.product.id;
  return (
    <div className="flex-item">
      <div style={{backgroundImage: `url(${props.product.img_url})`}} className="category-header"></div>
      <div className="product-top-info">
        <h3>{props.product.name}</h3>
        <h3>${props.product.price}</h3>
      </div>

      <Route
        exact path="/categories/:activity/:id"
        render={({ match }) => (<ProductsView
          match={ match }
          category={props.category}
          product={props.product}
        />)} />

      <Link to={`/categories/${category}/${id}`}>
        <p className="view-more">View More</p>
      </Link>
    </div>
  )
}

export default Product;
