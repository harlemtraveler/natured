class ProfileSideMenu extends Recat.Compnent {
  render() {
    return(
      <div className="profile-side-menu-container">
          <profilePicture />
          <EditableProfileInformationCard
            isOpen={true}
          />
          <div className="button-container">
            <button></button>
            <button>Cancel</button>
          </div>
      </div>
    );
  }
}

class ProfilePicture extends React.Component {
  render() {
    return(
      <img src={this.props.img_url}></img>
    );
  }
}

class ProfileInformationCardList extends React.Component {
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

class EditableProfileInformationCard extends React.Component {
  render() {
    if (this.props.editFormOpen) {
      return()
        <profileInformoationCardForm
          name={this.props.name}
          email={this.props.email}
          dob={this.props.dob}
          img_url={this.props.img_url}
        />
      );
    } else {
      return(
        <profileInformoationCard
          name={this.props.name}
          email={this.props.email}
          dob={this.props.dob}
        />
      );
    }
  }
}

class profileInformoationCard extends React.Component {
  render() {
    return(
      <div className="profile-information-card-container">
        <div className="name-container">
          {this.props.name}
        </div>
        <div className="email-container">
          {this.props.email}
        </div>
        <div className="dob-container">
          {this.props.dob}
        </div>
      </div>
    )
  }
}

class profileInformoationCardForm extends React.Component {
  render() {
    return(
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
        <button></button>
        <button>Cancel</button>
      </div>
    )
  }
}

ReactDOM.render(
  <ProfileSideMenu />,
  document.getElementById('content')
);
