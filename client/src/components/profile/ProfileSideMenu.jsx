import React, { Component } from 'react';
import ProfilePicture from './ProfilePicture';
import EditableProfileInformationCard from './EditableProfileInformationCard';

class ProfileSideMenu extends Component {
  render() {
    return(
      <div className="profile-side-menu-container">
          <ProfilePicture />
          <EditableProfileInformationCard
            isOpen={true}
          />
          <div className="button-container">
            <button>Edit</button>
            <button>Cancel</button>
          </div>
      </div>
    );
  }
}

export default ProfileSideMenu;
