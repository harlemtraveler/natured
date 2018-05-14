import React, { Component } from 'react';
import ProfilePicture from './ProfilePicture';
import EditableProfileInformationCard from './EditableProfileInformationCard';

class ProfileSideMenu extends Component {
  render() {
    return(
      <div className="profile-side-menu-container">
        <ProfilePicture />
        <EditableProfileInformationCard />
      </div>
    );
  }
}

export default ProfileSideMenu;
