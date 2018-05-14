import React from 'react';
import { Link } from 'react-router-dom';

function Recommended(props) {
  const imgUrl = {
    width: '100%',
    height: '300px',
    backgroundImage: `url(${props.product.img_url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'left center'
  }

  const category = props.product.category.toLocaleLowerCase();
  const id = props.product.id;

  return (
    <div className="recommended">
      <Link to={`/categories/${category}/${id}`}>
        <div style={imgUrl}></div>
        <div className="recommended-info">
          <h3>{props.product.name}</h3>
          <h3>${props.product.price}</h3>
        </div>
      </Link>
    </div>
  )
}

export default Recommended;
