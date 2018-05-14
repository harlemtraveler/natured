import React, { Component } from 'react';

class Product extends Component {

  handleTrashClick = () => {
    this.props.onTrashClick(this.props.id);
  }

  //const headerStyle = {
  //  backgroundImage: `url('https://imgur.com/f9ubYZX')`
  //}
  render() {
    //const elapsedString = helpers.renderElapsedString(this.props.elapsed);
    return(
      <div className="ui centered card">
        <div className="content">
          <div
            className="header"
            //style={headerStyle}
          >
            {this.props.img_url}
          </div>
          <div className="meta">
            {this.props.title}
          </div>
          <div className="centered aligned description">
            {this.props.description}
          </div>
          <div className="extra content">
            <span
              className="right floated edit icon"
              onClick={this.props.onEditClick}
            >
              <i className="edit icon" />
            </span>
            <span
              className="right floated trash icon"
              onClick={this.handleTrashClick}
            >
              <i className="trash icon" />
            </span>
          </div>
        </div>
        <div className="ui bottom attached blue basic button">
          Details
        </div>
      </div>
    );
  }
}

export default Product;
