import React, { Component } from 'react';
import ProfileInformationCardForm from './ProfileInformationCardForm';
import ProfileInformationCard from './ProfileInformationCard';

class EditableProfileInformationCard extends Component {
  render() {
    if (this.props.editFormOpen) {
      return(
        <ProfileInformationCardForm
          name={this.props.name}
          email={this.props.email}
          dob={this.props.dob}
          img_url={this.props.img_url}
        />
      );
    } else {
      return(
        <ProfileInformationCard
          name={this.props.name}
          email={this.props.email}
          dob={this.props.dob}
        />
      );
    }
  }
}

export default EditableProfileInformationCard;
