import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Category extends Component {
  render() {
    return (
      <div>
      <Link to={`/${this.props.category}`}>
<div className="flex-item">
<div style={{backgroundImage: `url(${this.props.image})`} } className="category-header">
</div>
</div>
</Link>
</div>
    )
  }
}

export default Category;
