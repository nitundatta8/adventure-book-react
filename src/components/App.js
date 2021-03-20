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
import PageHeader from './PageHeader';




function App() {
  return (
    <Router>
      <Header />
      {/* <IndexHeader /> */}
      <div className='App'>

        <Switch>

          <Route path="/signin">
            <LoginForm />
            <IndexHeader />
            <AdventuresControl />
          </Route>
          <Route path="/newAdventureForm">
            <PageHeader />
            <NewAdventureForm />
          </Route>
          <Route path="/campaignForm">
            <PageHeader />
            <CampaignForm />
          </Route>
          <Route path="/report">
            <PageHeader />
            <CampaignReport />
          </Route>

          {/* <Route path="/product/:imgId">
            <ProductTag />
          </Route> */}
          <Route path="/product/:imgId">
            <PageHeader />
            <ProductTagging />
          </Route>
          <Route path="/commissionreport">
            <PageHeader />
            <ClickCommissionReport />
          </Route>

          <Route path="/">
            <IndexHeader />
            <AdventuresControl />
          </Route>

        </Switch>
      </div>


    </Router>
  );
}

export default App;
