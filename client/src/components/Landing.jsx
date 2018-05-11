import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

function Landing(props) {
  const landingButton = {
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid #ffffff',
    position: 'absolute',
    top: '60%',
    marginLeft: '45%',
    width: '150px'
  }

  return(
    <MuiThemeProvider>
      <div className="flex-container">
        <div style={{backgroundImage: `url(https://images.unsplash.com/photo-1506535995048-638aa1b62b77?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f3e3ff1cce6d43ff22a50a83269f07ac&auto=format&fit=crop&w=1650&q=80)`} } className="landing-img">
          <div>
            <h1 className="landing-title">NATURE'D</h1>
            <Link to="/categories">
              <RaisedButton buttonStyle={landingButton}>Enter</RaisedButton>
            </Link>
          </div>
          <Typed strings={[`If you're not living on the edge you're taking up too much space`]} typeSpeed={40} className="landing-text"></Typed>
        </div>
      </div>
    </MuiThemeProvider>
  )
}

export default Landing;
