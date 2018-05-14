import React, { Component } from 'react';

class ProfileInformationCardForm extends Component {
  render() {
    return(
      <form>
        <div className="field">
          <label>Name</label>
          <input type="text" defaultValue={this.props.name} />
        </div>
        <div className="field">
          <label>Email</label>
          <input type="text" defaultValue={this.props.email} />
        </div>
        <div className="field">
          <label>Date of Birth</label>
          <input type="text" defaultValue={this.props.dob} />
        </div>
        <div className="field">
          <label>Image URL</label>
          <input type="text" defaultValue={this.props.img_url} />
        </div>
        <div className="button-container">
          <button>Cancel</button>
        </div>
      </form>
    )
  }
}

export default ProfileInformationCardForm;
