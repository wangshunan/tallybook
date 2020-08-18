import React from 'react'
import WithContext from '../WithContext'
import Ionicon from 'react-ionicons'
import PieChart from '../components/PieChart'
import 'bootstrap/dist/css/bootstrap.min.css'
import Prilist from '../components/PriceList'
import { TAB_TEXT, TYPE_INCOME,TYPE_OUTCOME, generateChartDataByCategory } from '../utility'
import TotalPrice from '../components/TotalPrice';
import MonthPicker from '../components/MonthPicker'
import CreateBtn from '../components/CreateBtn'
import Loader from '../components/Loader'
import { Tabs, Tab } from '../components/Tabs'
import { withRouter } from 'react-router-dom'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabView: TAB_TEXT[0]
        }
    }

    componentDidMount() {
        this.props.actions.getInitalData()
    }

    changeView = (index) => {
        this.setState({
            tabView: TAB_TEXT[index]
        })
    }

    changeDate = (date) => {
        this.props.actions.selectNewMonth(date.year, date.month)
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
        const { items, categories, currentDate } = data
        const { tabView } = this.state
        const itemsWithCategory = Object.keys(items).map(id => {
            items[id].category = categories[items[id].cid]
            return items[id]
        })     
        itemsWithCategory.forEach(item => {
            if ( item.category.type === TYPE_INCOME ) {
                totalIncome += item.price
            } else {
                totalOutcome += item.price
            }
        })
        const chartOutcomDataByCategory = generateChartDataByCategory(itemsWithCategory, TYPE_OUTCOME)
        const chartIncomeDataByCategory = generateChartDataByCategory(itemsWithCategory, TYPE_INCOME)
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
                    { this.props.data.isLoading && 
                        <Loader />
                    }
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
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <PieChart title="本月收入" categoryData={chartIncomeDataByCategory}/>
                                </div>
                                <div className="col-md-6">
                                    <PieChart title="本月支出" categoryData={chartOutcomDataByCategory}/>
                                </div>
                            </div>
                        </div>
                    }
                    { tabView === TAB_TEXT[0] && itemsWithCategory.length === 0 &&
                        <div className="alert alert-light text-center no-record">
                            还没有任何记账记录
                        </div>
                    }
                </div>
            </React.Fragment>
        )
    }
}

  export default withRouter(WithContext(Home))