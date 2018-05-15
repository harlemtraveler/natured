import React from 'react';
import { Link } from 'react-router-dom';

function Product(props) {
  const category = props.category.toLocaleLowerCase();
  const id = props.product.id;
  return (
    <div className="flex-item">
      <div style={{backgroundImage: `url(${props.product.img_url})`}} className="category-header"></div>
      <div className="product-top-info">
        <h3>{props.product.name}</h3>
        <h3>${props.product.price}</h3>
      </div>

      <Link to={`/categories/${category}/${id}`}>
        <p className="view-more">View More</p>
      </Link>
    </div>
  )
}

export default Product;
