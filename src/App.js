import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './containers/Home'
import Create from './containers/Create'
import { flatternArr } from './utility'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { testItems, testCategories } from './testData'

export const AppContext = React.createContext()
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: flatternArr(testItems),
      categories: flatternArr(testCategories)
    }
  }
  
  render() {
    return (
      <AppContext.Provider value={{
        state: this.state
      }}>
        <Router>
          <div>
            <Route path="/" exact component={Home}></Route>
            <Route path="/create" component={Create}></Route>
          </div>
        </Router>
      </AppContext.Provider>
    )
  }
}

export default App;
