import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Button } from 'Components';
import { StyledSiteHeader, StyledNavLink } from './Styles';
import { signInWithGoogle, auth } from '../../Services/firebase.utils';
import {User} from 'Interfaces/User';
import HeaderLogo from 'Components/HeaderLogo/HeaderLogo.component';

interface Props {
  user?: User;
}

function SiteHeader ({user}: Props): JSX.Element {
  return (
    <StyledSiteHeader>
      <HeaderLogo />
        <StyledNavLink to="/" >Home</StyledNavLink>
      {user 
        ? <React.Fragment>
            <StyledNavLink to="/profile">
              Profile
            </StyledNavLink>

            <Button primary={true} id="signOut" key="signout" onClick={(e) => auth.signOut()}>
              Sign Out
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