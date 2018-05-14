import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileInformationCard extends Component {
  render() {
    return(
      <div className="profile-information-card-container">
        <div className="name-container">Name</div>
        <div className="email-container">Email</div>
        <div className="dob-container">Date of Birth</div>
        <Link to="/sell/profile/edit" className="links">Edit Profile</Link>
      </div>
    )
  }
}

export default ProfileInformationCard;
