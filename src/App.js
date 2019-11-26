import React from 'react';
import logo from './logo.svg';
import './scss/App.scss';
import Home from './Component/Home'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import SignIn from './Component/SignIn';


function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route exact path = "/"><Home/></Route>
          <Route exact path = "/SignIn"><SignIn/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
