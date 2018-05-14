import React, { Component } from 'react';
import ProfileInformationCardForm from './ProfileInformationCardForm';
import ProfileInformationCard from './ProfileInformationCard';
import { Switch, Route } from 'react-router-dom';

class EditableProfileInformationCard extends Component {
  render() {
    return (
    <Switch>
      <Route
        exact
        path="/sell/profile/edit"
        render={() => (
          <ProfileInformationCardForm
            name={this.props.name}
            email={this.props.email}
            password={this.props.password}
            img_url={this.props.img_url}
          />
        )}
      />
      <Route
        render={() => (
          <ProfileInformationCard
            name={this.props.name}
            email={this.props.email}
          />
        )}
      />
    </Switch>
    )
  }
}

export default EditableProfileInformationCard;
