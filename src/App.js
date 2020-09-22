import React, { createContext, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import Book from './component/Book/Book';
import NoMatch from './component/NoMatch/NoMatch';
import Hotel from './component/Hotel/Hotel';
import LogIn from './component/LogIn/LogIn';
import PrivateRouter from './component/PrivateRouter/PrivateRouter';
export const UserContext = createContext();
function App() {
  const [loggedInuser, setLoggedInUser] = useState({});
  return (
    <div>
      <UserContext.Provider value={[loggedInuser, setLoggedInUser]}>
      <Router>
      <Navbar></Navbar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/book/:placeKey">
            <Book></Book>
          </Route>
          <PrivateRouter path="/hotel">
            <Hotel></Hotel>
          </PrivateRouter>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
