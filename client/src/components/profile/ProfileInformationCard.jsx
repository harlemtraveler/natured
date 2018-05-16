import React, { Component } from 'react';

class ProfileInformationCard extends Component {
  render() {
    return(
      <div className="profile-information-card-container">
        <div className="name-container">{this.props.user.username}</div>
        <div className="email-container">{this.props.user.email}</div>
      </div>
    )
  }
}

export default ProfileInformationCard;
