import React, { Component } from 'react';
import Banner from './Banner';

class Products extends Component {


  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.category && <Banner
          image={this.props.category.img_url}
          text={this.props.match.params.activity}
          />
        }
        {/*<h1>{this.props.match.params.activity}</h1>*/}
      </div>
    )
  }
}

export default Products;
