import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Prilist from './components/PriceList'
import ViewTab from './components/ViewTab'
import {LIST_VIEW, CHART_VIEW} from './utility'
import TotalPrice from './components/TotalPrice';
import MonthPicker from './components/MonthPicker'

const testItems = [
  {
    "id": 1,
    "title": "test",
    "price": 200,
    "date": "2018-09-10",
    "category": {
      "id": 1,
      "name": "旅行",
      "type": "outcome",
      "iconName": "ios-plane"
    }
  },
  {
    "id": 2,
    "title": "test",
    "price": 200,
    "date": "2018-09-10",
    "category": {
      "id": 2,
      "name": "旅行",
      "type": "outcome",
      "iconName": "ios-plane"
    }
  }
]

function App() {
  return (
    <div>
      <header>
      </header>
      <MonthPicker 
        year={2020}
        month={2}
      />
      {/* <TotalPrice 
        income={123}
        outcome={456}
      />
      <ViewTab
        activeTab={CHART_VIEW}
        onTabChange={(tab) => {console.log(tab)}}
      />
      <Prilist
        items={testItems}
        onMordifyItem={(item) => {console.log(item.id)}}
        onDeleteItem={() => {console.log('2')}}
      /> */}
    </div>
  );
}

export default App;
