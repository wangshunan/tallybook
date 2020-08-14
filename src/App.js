import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './containers/Home'
import Create from './containers/Create'
import { flatternArr, ID, parseToYearAndMonth } from './utility'
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

    this.actions = {
      deleteItem: (id) => {
        delete this.state.items[id]
        this.setState({
          items: this.state.items
        })
      },
      createItem: (data, categoryId) => {
        const newId = ID()
        const parsedDate = parseToYearAndMonth(data.date)
        const category = this.state.categories[categoryId]
        data.monthCategory = `${parsedDate.year}-${parsedDate.month}`
        data.timestamp = new Date(data.date).getTime()
        const newItem = { ...data, id: newId, cid: categoryId, category }
        this.setState({
          items: { ...this.state.items, [newId]: newItem }
        })
      },
      updateItem: (data, categoryId) => {
        const modifedItem = {
          ...data,
          cid: categoryId,
          timestamp: new Date(data.date).getTime()
        }

        this.setState({
          items: { ...this.state.items, [modifedItem.id]: modifedItem }
        })
      }
    }
  }
  
  render() {
    return (
      <AppContext.Provider value={{
        state: this.state,
        actions: this.actions
      }}>
        <Router>
          <div>
            <Route path="/" exact component={Home}></Route>
            <Route path="/create" component={Create}></Route>
            <Route path="/edit/:id" component={Create}></Route>
          </div>
        </Router>
      </AppContext.Provider>
    )
  }
}

export default App;
