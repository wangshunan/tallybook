import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Prilist from './components/PriceList'

const testItems = [
  {
    "id": 1,
    "title": "test",
    "price": 200,
    "date": "2018-09-10",
    "category": {
      "id": 1,
      "name": "旅行",
      "type": "outcome"
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
      "type": "outcome"
    }
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Prilist
          items={testItems}
          onMordifyItem={(item) => {console.log(item.id)}}
          onDeleteItem={() => {console.log('2')}}
      />
    </div>
  );
}

export default App;
