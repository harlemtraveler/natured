import React from 'react';

function Banner(props) {
  return(
    <div style={{backgroundImage: `url(${props.image})`}} className="feature-header">
      <div className="feature-text"><h1>{props.text}</h1></div>
    </div>
  )
}

export default Banner;
