import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import AdventuresControl from './AdventuresControl';
import NewAdventureForm from './NewAdventureForm';


function App() {
  return (
    <Router>
      <Header />
      <div className='App'>
        <Switch>
          <Route path="/newAdventureForm">
            <NewAdventureForm />
          </Route>
          <Route path="/">
            <AdventuresControl />
          </Route>


        </Switch>
      </div>


    </Router>
  );
}

export default App;
