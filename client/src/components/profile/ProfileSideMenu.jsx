import React, { Component } from 'react';
import ProfilePicture from './ProfilePicture';
import EditableProfileInformationCard from './EditableProfileInformationCard';

class ProfileSideMenu extends Component {
  render() {
    return(
      <div className="profile-side-menu-container">
        <ProfilePicture />
        <EditableProfileInformationCard
          user={this.props.user}
          onSubmit={this.props.onSubmit}
        />
      </div>
    );
  }
}

export default ProfileSideMenu;
