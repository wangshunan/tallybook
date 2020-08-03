import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Prilist from './components/PriceList'
import ViewTab from './components/ViewTab'
import {LIST_VIEW, CHART_VIEW} from './utility'
import TotalPrice from './components/TotalPrice';
import MonthPicker from './components/MonthPicker'
import Home from './containers/Home'

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
