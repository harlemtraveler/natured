import React from 'react';

function Recommended(props) {
  const imgUrl = {
    width: '100%',
    height: '300px',
    backgroundImage: `url(${props.product.img_url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'left center'
  }

  return (
    <div className="recommended">
      <div style={imgUrl}></div>
      <div className="recommended-info">
        <h3>{props.product.name}</h3>
        <h3>${props.product.price}</h3>
      </div>
    </div>
  )
}

export default Recommended;
