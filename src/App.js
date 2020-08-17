import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
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
      categories: flatternArr(testCategories),
      currentDate: parseToYearAndMonth(),
      isLoading: false
    }

    const withLoading = (cb) => {
      return( (...args) => {
        this.setState({
          isLoading: true
        })
        return cb(...args)
      })
    }

    this.actions = {
      getInitalData: withLoading(async () => {
        this.setState({
          isLoading: true
        })
        const { currentDate } = this.state
        const getURLWithData = `/items?monthCategory=${currentDate.year}-${currentDate.month}&_sort=itemstamp&_order=desc`
        const results = await Promise.all([axios.get('/categories'), axios.get(getURLWithData)])
        const [ categories, items ] = results
        this.setState({
          items: flatternArr(items.data),
          categories: flatternArr(categories.data),
          isLoading: false
        })

        return results
      }),
      getEditData: withLoading(async (id) => {
        const { items, categories } = this.state
        const itemAlreadyFetched = !!(Object.keys(items).indexOf(id) > -1)
        const categoriesLength = Object.keys(categories).length
        let promiseArr = []

        if ( categoriesLength === 0 ) {
          promiseArr.push(axios.get('/categories'))
        } else {
          promiseArr.push(new Promise((resolve) => { resolve(null) }))
        }

        
        if ( id && !itemAlreadyFetched ) {
          const getURLWithID = `/items/${id}`
          promiseArr.push(axios.get(getURLWithID))
        }

        const [ fetchedCategories, editItem ] = await Promise.all(promiseArr)
        const finalCategories = fetchedCategories ? flatternArr(fetchedCategories.data) : categories
        const finalItem = editItem ? editItem.data : items[id]

        if (id) {
          this.setState({
            categories: finalCategories,
            items: { ...this.state.items, [id]: finalItem },
            isLoading: false
          })
        } else {
          this.setState({
            categories: finalCategories,
            isLoading: false
          })
        }

        return ({
          categories: finalCategories,
          editItem: finalItem
        })
      }),
      selectNewMonth: withLoading(async (year, month) => {
        const getURLWithData = `/items?monthCategory=${year}-${month}&_sort=itemstamp&_order=desc`
        const items = await axios.get(getURLWithData)
        this.setState({
          items: flatternArr(items.data),
          currentDate: { year, month },
          isLoading: false
        })

        return items
      }),
      deleteItem: withLoading(async (id) => {
        const deleteItem = await axios.delete(`/items/${id}`)
        delete this.state.items[id]
        this.setState({
          items: this.state.items,
          isLoading: false
        })

        return deleteItem
      }),
      createItem: withLoading(async (data, categoryId) => {
        const newId = ID()
        const parsedDate = parseToYearAndMonth(data.date)
        data.monthCategory = `${parsedDate.year}-${parsedDate.month}`
        data.timestamp = new Date(data.date).getTime()
        const newItem = await axios.post('/items', { ...data, id: newId, cid: categoryId })
        this.setState({
          items: { ...this.state.items, [newId]: newItem.data },
          isLoading: false
        })

        return newItem.data
      }),
      updateItem: withLoading(async (data, categoryId) => {
        const updatedData = {
          ...data,
          cid: categoryId,
          timestamp: new Date(data.date).getTime()
        }

        const modifedItem = await axios.put(`/items/${updatedData.id}`, updatedData)
        this.setState({
          items: { ...this.state.items, [updatedData.id]: updatedData },
          isLoading: false
        })

        return modifedItem.data
      })
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
