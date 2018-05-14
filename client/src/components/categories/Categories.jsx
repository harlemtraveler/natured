import React from 'react';
import '../../App.css';
import Category from './Category';
import Banner from '../Banner';
import Footer from '../Footer';

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
            image="https://images.unsplash.com/photo-1485745352553-859d7a306fbd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d57b648befb46f55dfd0fb04ae51d4e3&auto=format&fit=crop&w=1050&q=80"
            text="Andes Mountains"
          />
          {categories}
        </div>
        <Footer/>
      </div>

  );
}

export default Categories;
