import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'Components';
import { StyledSiteHeader } from './Styles.js';
import { signInWithGoogle } from '../../Services/firebase.utils';

function SiteHeader ({user, signOut}) {

  const handleSignIn = () => {
    signInWithGoogle();
  }

  return (
    <StyledSiteHeader>
      <NavLink to="/" >Home</NavLink>
      {user 
        ? <React.Fragment>
            <Button 
              key="signout" 
              onClick={signOut}
            >Sign Out</Button> 
            <NavLink 
              to="/profile"
            >Profile</NavLink>
          </React.Fragment>
        : <Button 
            onClick={handleSignIn}
          >Sign In with Google</Button> 
      }
    </StyledSiteHeader>
  )
}

export default SiteHeader;