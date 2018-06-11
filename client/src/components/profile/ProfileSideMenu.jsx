import React, { Component } from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileInformationCard from './ProfileInformationCard';

class ProfileSideMenu extends Component {
  render() {
    return(
      <div className="profile-side-menu-container">
        <ProfilePicture />
        <ProfileInformationCard
          user={this.props.user}
        />
      </div>
    );
  }
}

export default ProfileSideMenu;
