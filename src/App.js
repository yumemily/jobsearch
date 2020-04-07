import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import {useSelector} from 'react-redux'

import Homepage from './pages/Homepage'
import CreateCandidate from './pages/CreateCandidate'
import CandidatesPage from './pages/CandidatesPage'
import CandidatePage from "./pages/CandidatePage";
import Login from './pages/Login'
import FourOhFourPage from './components/FourOhFourPage'
import NavBar from './components/Navbar'
import LoginError from './pages/LoginError'

function App() {

  let user = useSelector(state => state.user) //bring user info

  let ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
      <Route {...rest} render={
        (props) => {
          if (user.authenticate == true) {
            return (
              <Component {...props} />
            )
          } else {
            return (
              <Redirect to={{ pathname: '/accessdenied' }} />
            )}
        }} />
    )}

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/createcandidate' component = {CreateCandidate}/>
          <ProtectedRoute
            path="/candidates/:id"
            exact component={CandidatePage} />
          <ProtectedRoute
            path="/candidates"
            exact component={CandidatesPage} />
          <Route path="/login" exact component={Login} />
          <Route path='/' exact component={Homepage} />
          <Route path="/accessdenied" component={LoginError} />
          <Route path="*" component={FourOhFourPage} />
        </Switch>
      </Router>
    </div>
  );

}

export default App;
