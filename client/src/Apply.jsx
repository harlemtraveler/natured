import React from 'react';
import './App.css';
import Banner from './components/Banner';

function  Apply (props) {
  return(
      <div className="flex-container">
        <Banner
          image="https://images.unsplash.com/photo-1431631927486-6603c868ce5e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=31cfb792a10418a51f4a1e609e089a06&auto=format&fit=crop&w=1350&q=80"
          text="Careers with Nature'd"
        />
        <div className="menu-links-padding">
    <h1>Join our Team</h1>
    <p> No current openings. Please check back soon.</p>
    </div>
<div className="flex-item">
        <div style={{backgroundImage: `url(https://images.unsplash.com/photo-1522165078649-823cf4dbaf46?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=756f069c98c96a701453b1e27630e961&auto=format&fit=crop&w=1350&q=80)`} } className="category-header">
          <h1 className="header-category">{props.category}</h1>
        </div>
    </div>
    </div>
  )
}

export default Apply;
