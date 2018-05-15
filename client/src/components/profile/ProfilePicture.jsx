import React from 'react';
import pic from '../../leaf.png';

function ProfilePicture(props) {
  const img = {
    backgroundImage: `url(${pic})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }

  return(
    <div className="portrait-container">
      <div className="portrait" style={img}></div>
    </div>
  );
}

export default ProfilePicture;
