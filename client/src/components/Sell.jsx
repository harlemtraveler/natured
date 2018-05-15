import React, { Component } from 'react';
import ProfileSideMenu from './profile/ProfileSideMenu';
import ProductDashboard from './profile/ProductDashboard';

class Sell extends Component {
  isLoggedIn() {
    if(this.props.user === null) {
      this.props.history.push('/login');
    }
  }

  componentDidMount() {
    this.isLoggedIn();
  }

  render() {
    return(
      <div>
        {this.props.user &&
          <div className="profile-container">
            <div className="side-menu">
              <ProfileSideMenu
                user={this.props.user}
                onSubmit={this.props.onSubmit}
              />
            </div>

            <div className="seller-info">
              <div>
                <ProductDashboard />
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Sell;
