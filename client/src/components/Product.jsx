import React from 'react';

function Product(props) {
  return (
    <div className="flex-item">
      <div style={{backgroundImage: `url(/img/hiking/compass.jpg)`} } className="category-header">
          </div>
      <h3>{props.name}</h3>
    </div>
  )
}

export default Product;
