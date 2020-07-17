import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import AdventuresControl from './AdventuresControl';

function App() {
  return (
    <Router>
      <Header />
      <AdventuresControl />

    </Router>
  );
}

export default App;
