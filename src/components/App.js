import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import 'antd/dist/antd.css';
import AdventuresControl from './AdventuresControl';
import NewAdventureForm from './NewAdventureForm';
import CampaignForm from './CampaignForm';
import CampaignReport from './CampaignReport';
import LoginForm from './LoginForm';


function App() {
  return (
    <Router>
      <Header />
      <div className='App'>
        <Switch>

          <Route path="/signin">
            <LoginForm />
          </Route>
          <Route path="/newAdventureForm">
            <NewAdventureForm />
          </Route>
          <Route path="/campaignForm">
            <CampaignForm />
          </Route>
          <Route path="/report">
            <CampaignReport />
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
