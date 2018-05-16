import React from 'react';
import { Link } from 'react-router-dom';

function Banner(props) {
  return(
    <div className="banner">
      <div style={{backgroundImage: `url(${props.image})`}} className="feature-header">
        <div className="feature-text"><h1>{props.text}</h1></div>
      </div>
      <Link to="/all">
        <div className="all-products">Browse all products</div>
      </Link>
    </div>
  )
}

export default Banner;
