import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';


function Category(props) {

  return (
    <div className="flex-item">
      <Link to={`/categories/${props.category.toLocaleLowerCase()}`}>
        <div style={{backgroundImage: `url(${props.image})`} } className="category-header">
          <h1 className="header-category">{props.category}</h1>
        </div>
      </Link>
    </div>
  )
}

export default Category;
