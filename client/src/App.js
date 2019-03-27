import React, { Fragment, } from 'react';
import Navbar from "./components/Navbar";
import UserProfile from "./components/UserProfile";
import { Switch, Route, } from "react-router-dom";
import { Container } from 'react-bootstrap'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import NoMatch from './components/NoMatch'
import FetchUser from "./components/FetchUser"

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <Home /> }
          />
          <Route
            exact
            path="/user/profile"
            render={ () => <UserProfile /> }
          />
          <Route 
            exact path="/login" 
            component={Login} 
          />
          <Route 
            exact path="/register" 
            component={Register} 
          />
          <Route 
            component={NoMatch} 
          />
        </Switch>
      </Container>
    </FetchUser>
  </>
)

export default App;