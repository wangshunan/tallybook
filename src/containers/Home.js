import React from 'react'
import WithContext from '../WithContext'
import Ionicon from 'react-ionicons'
import 'bootstrap/dist/css/bootstrap.min.css'
import Prilist from '../components/PriceList'
import {TAB_TEXT, TYPE_INCOME, TYPE_OUTCOME, parseToYearAndMonth, padLeft} from '../utility'
import TotalPrice from '../components/TotalPrice';
import MonthPicker from '../components/MonthPicker'
import CreateBtn from '../components/CreateBtn'
import { Tabs, Tab } from '../components/Tabs'
import { withRouter } from 'react-router-dom'

export const categories = {
    "1": {
        "id": 1,
        "name": "旅行",
        "type": TYPE_OUTCOME,
        "iconName": "ios-plane"
    },
    "2": {
        "id": 2,
        "name": "旅行",
        "type": TYPE_OUTCOME,
        "iconName": "ios-plane"
    }
}

export const testItems = [
    {
      "id": 1,
      "title": "test",
      "price": 200,
      "date": "2020-07-10",
      "cid": 1
    },
    {
      "id": 2,
      "title": "test",
      "price": 200,
      "date": "2016-09-10",
      "cid": 2
    }
]


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: testItems,
            currentDate:parseToYearAndMonth(),
            tabView: TAB_TEXT[0]
        }
    }

    changeView = (index) => {
        this.setState({
            tabView: TAB_TEXT[index]
        })
    }

    changeDate = (date) => {
        this.setState({
            currentDate: date
        })
    }

    modifyItem = (id) => {
        this.props.history.push(`/edit/${id}`)
    }

    createItem = () => {
        this.props.history.push('/create')
    }

    deleteItem = (id) => {
        this.props.actions.deleteItem(id)
    }

    render() {
        let totalIncome = 0, totalOutcome = 0
        const { data } = this.props
        const { items, categories } = data
        const { currentDate, tabView } = this.state
        const itemsWithCategory = Object.keys(items).map(id => {
            items[id].category = categories[items[id].cid]
            return items[id]
        }).filter(item => {
            return item.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)
        })
        itemsWithCategory.forEach(item => {
            if ( item.category.type === TYPE_INCOME ) {
                totalIncome += item.price
            } else {
                totalOutcome += item.price
            }
        })
        return (
            <React.Fragment>
                <header>
                </header>
                <div className="row home-container align-items-center">
                    <div className="col m-4">
                        <MonthPicker
                            year={currentDate.year}
                            month={currentDate.month}
                            onChange={this.changeDate}
                        />
                    </div>
                    <div className="col text-center">
                        <TotalPrice 
                            income={totalIncome}
                            outcome={totalOutcome}
                        />
                    </div>
                </div>
                <div className="content-area py-3 px-3">
                    <Tabs activeIndex={0} onTabChange={this.changeView}>
                        <Tab>
                            <Ionicon
                                className="rounded mr-2"
                                fontSize="25px"
                                color={'#007bff'}
                                icon='ios-paper'
                            />
                            List
                        </Tab>
                        <Tab>
                            <Ionicon
                                className="rounded ml-2"
                                fontSize="25px"
                                color={'#007bff'}
                                icon='ios-pie'
                            />
                            Chart
                        </Tab>
                    </Tabs>
                    <CreateBtn
                        btnName="创建一条新的记账记录"
                        iconName="md-add"
                        callBack={this.createItem}
                    />
                    { tabView === TAB_TEXT[0] &&
                        <Prilist
                            items={itemsWithCategory}
                            onModifyItem={this.modifyItem}
                            onDeleteItem={this.deleteItem}
                        />
                    }
                    { tabView === TAB_TEXT[1] &&
                        <h1>图表模式</h1>
                    }
                    { tabView === TAB_TEXT[0] && itemsWithCategory.length === 0 &&
                        <div className="alert alert-light text-center no-record">
                            您还没有任何记账记录
                        </div>
                    }
                </div>
            </React.Fragment>
        )
    }
}

  export default withRouter(WithContext(Home))