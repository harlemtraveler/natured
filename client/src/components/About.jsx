import React from 'react';
import '../App.css';
import Banner from './Banner';
import { Link } from 'react-router-dom';

function About (props) {
  return(
    <div className="flex-container">
      <Banner
        image="https://images.unsplash.com/photo-1505201102202-2393c94a84a3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dff253c2e5698ad4892e97520384e9b1&auto=format&fit=crop&w=2550&q=80"
        text="About Our Company"
      />
      <div className="menu-links-padding">
        <h1>Nature'd Mission Statement</h1>
        <p>Build the best product, cause no unecessary harm, and use business to inspire and implement solutions to the environmental crisis</p>
        <h1>Our History</h1>
        <p>Founded in 1987, Nature'd grew out of a small
        company that made tools for climbers. In the mid-90's we grew our
        business to include clothing and gear for fishing, hiking, skydiving, running and camping. In 2007 we decided to expand our business
        to allow customers to sell their gear to us. We offer very competitive rates to buy your lightly used equipment. Create a profile <Link to="/register">here</Link> to get started.
        <br/>
        <br/>
        Staying true to our core values during thirty-plus years in business has helped us create a company we're proud to run and work for.
        We pledge to always deliver on the highest quality sports gear available on the market. </p>
        <h1>Credit to <a href="http://www.patagonia.com/home/">Patagonia</a> for inspiring our philosphy :)</h1>
      </div>
    </div>
  )
}

export default About;
