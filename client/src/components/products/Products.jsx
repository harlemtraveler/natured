import React from 'react';
import Banner from '../Banner';
import Product from './Product';

function Products(props) {
  let products;

  if(props.category) {
    products = props.products.filter(
      prod => prod.category_id === props.category.id)
    .map(product => {
      return (
        <Product
          key={product.id}
          product={product}
          category={props.category}
        />
      )
    });
  }

  return (
    <div>
      {props.category && <Banner
        image={props.category.img_url}
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
