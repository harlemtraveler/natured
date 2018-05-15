import React from 'react';
import Banner from '../Banner';
import Product from './Product';

function Products(props) {
  let products;

  if(props.products && props.category) {
    products = props.products.filter(
      prod => prod.category_id === props.category.id)
    .map(product => {
      return (
        <Product
          key={product.id}
          product={product}
          category={product.category}
        />
      )
    });
  } else if(props.viewAll && props.category) {
    products = props.viewAll.map(product => {
      return (
        <Product
          key={product.id}
          product={product}
          category={product.category}
        />
      )})

  }

  return (
    <div>
      {props.category && <Banner
        image={props.category.img_url || 'https://images.unsplash.com/photo-1485745352553-859d7a306fbd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d57b648befb46f55dfd0fb04ae51d4e3&auto=format&fit=crop&w=1050&q=80'}
        text={props.match.params.activity}
        />
      }
      <div className="flex-container products">
        {products}
      </div>
    </div>
  )
}

export default Products;
