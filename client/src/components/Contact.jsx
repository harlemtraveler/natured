import React from 'react';
import '../App.css';
import Banner from './Banner';

function Contact (props) {
  return(
    <div className="flex-container">
        <Banner
          image="https://images.unsplash.com/photo-1446488547543-78c11468449a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fb40c62d816950ad87c0c95660aaeaf2&auto=format&fit=crop&w=2549&q=80"
          text="Contact Us"
        />
    <div className="menu-links-padding">
    <h1>How can we help?</h1>
    <h2>Frequently Asked Questions</h2>
    <p>Find the answers to our most commonly asked questions <a href="/here"><span className="link-highlight">here</span></a>.</p>
    <br/>
    <br/>
    <h2>Phone</h2>
    <h2>1-800-NAT-URED</h2>
    <p>Nature'd Customer Service Reps are available weekdays from 9AM - 5PM and weekends from 8AM - 4PM.
    Phone orders are accepted 24 hours a day 7 days a week.</p>
   </div>
   </div>
  )
}

export default Contact;
