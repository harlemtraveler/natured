import React, { Component } from 'react';

class ProfileInformationCardList extends Component {
  render() {
    return(
      <div className="profile-information-card-container">
        <EditableProfileInformationCard
          name="John Doe"
          email="jdoe@mail.com"
          dob="01/01/1899"
        />
      </div>
    )
  }
}

export ProfileInformationCardList;
