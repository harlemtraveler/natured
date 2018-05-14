import React, { Component } from 'react';
import ProfileSideMenu from './profile/ProfileSideMenu';
import ProfileInformationCardForm from './profile/ProfileInformationCardForm';

class Sell extends Component {
  render() {
    return(
      <div className="profile-container">
        <div className="side-menu">
          <ProfileSideMenu />
        </div>

        <div className="seller-info">
          <div>
            <ProfileInformationCardForm />
          </div>
        </div>
      </div>
    )
  }
}

export default Sell;
