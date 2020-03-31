import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import Homepage from './pages/Homepage'
import CreateCandidate from './pages/CreateCandidate'
import CandidatesPage from './pages/CandidatesPage'
import CandidatePage from "./pages/CandidatePage";
import FourOhFourPage from './components/FourOhFourPage'
import NavBar from './components/Navbar'


function App() {
  let [auth, setAuth] = useState(false)

  function handleLogin() {
    setAuth(true);
  }

  function AccessDenied() {
    return (
      <div className='container m-5'>
        <h1>Uh oh! :(</h1>
        <h6>You do not have access to make changes. Please login and try again.</h6>
        <Link to="/candidates">
          <button onClick = {()=>{handleLogin()}}type="button">
            Login
     </button>
        </Link>
      </div>
    )
  }

  let ProtectedRoute = ({ component: Component, auth, ...rest }) => {
    return (
      <Route {...rest} render={
        (props) => {
          if (auth == true) {
            return (
              <Component {...props} />
            )
          } else {
            return (
              <Redirect to={{ pathname: '/accessdenied' }} />
            )
          }
        }} />
    )
  }


  return (
    <div>
      <Router>
        <NavBar auth={auth} setAuth={setAuth} />
        <Switch>
          <Route path='/createcandidate'>
            <CreateCandidate />
          </Route>
          <ProtectedRoute
            auth={auth}
            path="/candidates/:id"
            exact component={CandidatePage} />
          <ProtectedRoute
            auth={auth}
            path="/candidates"
            exact component={CandidatesPage} />
          <Route path='/' exact >
            <Homepage />
          </Route>
          <Route path="/accessdenied" component={AccessDenied} />
          <Route path="*" component={FourOhFourPage} />
        </Switch>
      </Router>
    </div>
  );

}



export default App;
