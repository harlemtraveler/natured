import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Category extends Component {
  render() {
    return (

<div className="flex-item">
  <Link to={`/${this.props.category}`}>
<div style={{backgroundImage: `url(${this.props.image})`} } className="category-header">
</div>
</Link>
</div>
    )
  }
}

export default Category;
