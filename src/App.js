import React, { createContext, useState } from 'react';
import './App.css';
import Booking from './components/Booking/Booking';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import FirstPageTitle from './components/FirstPage_Title/FirstPageTitle';
import Hotel from './components/Hotel/Hotel';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';



export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]} >
      <div className="cover">
        {
          loggedInUser.email ?
          <h4 id="emailandpass">Email : {loggedInUser.email}</h4> : <h4 id="emailandpass">Name: {loggedInUser.displayName}</h4>                     
        }
        <Router>
          <Header></Header>
          <Switch>
            <Route  path="/book/:place">
              <Booking></Booking>
            </Route>
            <Route path="/Login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/hotel/:id">
              <Hotel></Hotel>
            </PrivateRoute>
            <Route  path="/">
              <FirstPageTitle></FirstPageTitle>
            </Route>
          </Switch> 
        </Router>

      </div>
    </UserContext.Provider>
  );
}

export default App;
