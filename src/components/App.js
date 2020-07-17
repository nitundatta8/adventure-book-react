import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdventureList from './AdventureList';
import './App.css';
import AdventuresControl from './AdventuresControl';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/home'>
          <AdventureList />
        </Route>
        {/* <AdventuresControl /> */}

      </Switch>

    </Router>
  );
}

export default App;
