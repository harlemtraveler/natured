import React, { Component } from 'react';

class ProfilePicture extends Component {
  render() {
    const imgDiv = {
      width: '150px',
      height: '150px',
      backgroundImage: `url('https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png')`,
      backgroundSize: 'cover'
    }

    return(
      <div style={imgDiv}></div>
    );
  }
}

export default ProfilePicture;
