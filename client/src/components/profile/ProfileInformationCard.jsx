import React, { Component } from 'react';

class ProfileInformationCard extends Component {
  render() {
    return(
      <div className="profile-information-card-container">
        <div className="name-container">Name</div>
        <div className="email-container">Email</div>
        <div className="dob-container">Date of Birth</div>
      </div>
    )
  }
}

export default ProfileInformationCard;
