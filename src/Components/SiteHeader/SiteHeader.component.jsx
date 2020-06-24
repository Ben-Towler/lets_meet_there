import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Button } from 'Components';
import { StyledSiteHeader, StyledNavLink } from './Styles.js';
import { signInWithGoogle, auth } from '../../Services/firebase.utils';
import HeaderLogo from 'Components/HeaderLogo/HeaderLogo.component.jsx';

function SiteHeader ({user}) {
  return (
    <StyledSiteHeader>
      <HeaderLogo />
        <Button secondary={true}><StyledNavLink to="/" >Home</StyledNavLink></Button>
      {user 
        ? <React.Fragment>
            <Button primary={true} is="signOut" key="signout" onClick={(e) => auth.signOut()}>
              Sign Out
            </Button> 
            <Button secondary={true}>
              <StyledNavLink to="/profile">
                Profile
              </StyledNavLink>
            </Button>
          </React.Fragment>
        : <Button primary={true} id="signin" onClick={(e) => signInWithGoogle()}>
            Sign In with Google
          </Button> 
      }
    </StyledSiteHeader>
  )
}

export default SiteHeader;