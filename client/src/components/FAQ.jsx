import React from 'react';
import '../App.css';
import Banner from './Banner';

function Contact (props) {
  return(
    <div className="flex-container">
      <Banner
        image="https://images.unsplash.com/photo-1465173904241-1f101f249d97?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=03ec6b4da76843fb09a0c5cd299f86ac&auto=format&fit=crop&w=2550&q=80"
        text="Frequently Asked Questions"
      />
      <div className="menu-links-padding">
        <h1>Frequently Asked Questions</h1>
        <h2>Nature'd Returns & Exchanges</h2>
        <p>Does Nature'd offer exchanges?</p>
        <p>What's your return policy?</p>
        <p>How do I return my wetsuit?</p>
        <p>How long will it take for my return to be processed?</p>
        <br/>
        <br/>
        <h2>Shipping Information</h2>
        <p>How long will it take for my order to arrive?</p>
        <p>Do you offer international shipping?</p>
        <p>What are your ship rates?</p>
      </div>
    </div>
  )
}

export default Contact;
