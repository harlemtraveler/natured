import React, { Component } from 'react';

class Products extends Component {


  render() {
    return (
      <h1>{this.props.match.params.activity}</h1>
    )
  }
}

export default Products;
