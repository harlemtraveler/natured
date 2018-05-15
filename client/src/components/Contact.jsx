import React from 'react';
import '../App.css';

function Contact (props) {
  return(
    <div className="menu-links-padding">
    <h1>How can we help?</h1>
    <h2>Frequently Asked Questions</h2>
    <p>Find the answers to our most commonly asked questions <a href="/here">here</a>.</p>
    <br/>
    <br/>
    <h2>Phone</h2>
    <h2>1-800-NAT-URED</h2>
    <p>Nature'd Customer Service Reps are available weekdays from 9AM - 5PM and weekends from 8AM - 4PM.
    Phone orders are accepted 24 hours a day 7 days a week.</p>
   </div>
  )
}

export default Contact;
