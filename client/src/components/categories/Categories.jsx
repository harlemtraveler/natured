import React from 'react';
import '../../App.css';
import Category from './Category';
import Banner from '../Banner';

function Categories(props) {
  const categories = props.categories.map(category => {
    return (
      <Category
        key={category.id}
        category={category.category}
        image={category.img_url}
      />
    )
  });


  return (
    <div>
      <div className="flex-container">
        <Banner
          image="https://images.unsplash.com/photo-1508705797775-df0a02b53113?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ba9c90ede15a4a5e0e391c6478d07f5c&auto=format&fit=crop&w=2550&q=80"
          text="Mt.Rainier National Park"
        />
        {categories}
      </div>
    </div>
  );
}

export default Categories;
