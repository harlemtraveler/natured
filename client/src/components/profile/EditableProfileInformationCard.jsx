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
              name={this.props.user.username}
              email={this.props.user.email}
              onSubmit={this.props.onSubmit}
            />
          )}
        />
        <Route
          render={() => (
            <ProfileInformationCard
              name={this.props.user.username}
              email={this.props.user.email}
            />
          )}
        />
      </Switch>
    )
  }
}

export default EditableProfileInformationCard;
