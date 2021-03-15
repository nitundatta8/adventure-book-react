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
import ProductTagging from './ProductTagging';
import ClickCommissionReport from './ClickCommissionReport';
import IndexHeader from './IndexHeader';




function App() {
  return (
    <Router>
      <Header />
      <IndexHeader />
      <div className='App'>

        <Switch>

          <Route path="/signin">
            <LoginForm />
            <AdventuresControl />
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

          {/* <Route path="/product/:imgId">
            <ProductTag />
          </Route> */}
          <Route path="/product/:imgId">
            <ProductTagging />
          </Route>
          <Route path="/commissionreport">
            <ClickCommissionReport />
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
