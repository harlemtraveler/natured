import React from 'react';

function Banner(props) {
  return(
    <div style={{backgroundImage: props.image}} className="feature-header"></div>
  )
}

export default Banner;
