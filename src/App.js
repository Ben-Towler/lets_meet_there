import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import {SiteHeader} from 'Components';
import {Home, ProfilePage} from 'Containers';
import {auth, createUserProfileDocument} from 'Services/firebase.utils';
import Theme from './Theme';
import HeroImage from './Components/HeroImage/HeroImage.component';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

// TODO: add Theme and HeroImage to index router

function App() {
    const [currentUser, setCurrentUser] = useState(false);
    let unsubscribeFromAuth = null;

    useEffect(() => {
        unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapShot => {
                    const userData = snapShot.data();
                    userData.favourites = JSON.parse(userData.favourites)
                    setCurrentUser({
                        id: snapShot.id,
                        ... userData
                    })
                });
            }
            setCurrentUser(userAuth);
        })

        return() => unsubscribeFromAuth();
    }, []);

    //TODO: add more breakpoints 

  return (
    <React.Fragment>
      <Grid>
        <Row>
          <Col xs={7} s={7} md= {7} lg={7}> 
            <Theme>
              <SiteHeader key='siteheader'
                  user={currentUser}/>
              <Switch>
                <Route key='home' path="/" exact>
                  <Home currentUser={currentUser}/>
                </Route>
                <Route key='profile' path='/profile' exact>
                  <ProfilePage user={currentUser}/>
                </Route>
              </Switch>
            </Theme>
          </Col>
          <Col xs={5} s={5} md= {5} lg={5}>
              <HeroImage/>
          </Col>
        </Row>
      </Grid>
    </React.Fragment>
  );
}

export default App;
