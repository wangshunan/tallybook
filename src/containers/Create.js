import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CategorySelect from '../components/CategorySelect'
import { Tabs, Tab } from '../components/Tabs'
import PriceForm from '../components/PriceForm'
import { testItems } from './Home'
import Ionicon from 'react-ionicons'
import WithContext from '../WithContext'
import { withRouter } from 'react-router-dom'
import { TAB_TEXT, TYPE_OUTCOME, TYPE_INCOME } from '../utility'

const tabsText = [TYPE_OUTCOME, TYPE_INCOME]
class Create extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: TYPE_OUTCOME,
            selectedCategory: null
        }
    }

    tabChange = (index) => {
        this.setState({
            selectedTab: tabsText[index]
        })
    }

    submitFrom = (data, editMode) => {
        this.props.actions.createItem(data, this.state.selectedCategory.id)
        console.log(data)
        this.props.history.push('/')
    }

    cancelSubmit = () => {
        this.props.history.push('/')
    }

    render() {
        const { data } = this.props
        const { items, categories } = data
        const { selectedTab, selectedCategory } = this.state
        const { id } = this.props.match.params
        const editItem = (id && items[id]) ? items[id] : {}
        const filterCategories = Object.keys(categories)
              .map(id => {
                  if (categories[id].type === selectedTab) {
                      return categories[id]
                  }
                }).filter((e) => {return e})

        return (
            <div className="container py-3 px-5 align-items-center">
                <Tabs activeIndex={0} onTabChange={this.tabChange}>
                    <Tab>
                        income
                    </Tab>
                    <Tab>
                        outcome
                    </Tab>
                </Tabs>
                <CategorySelect
                    categories={filterCategories}
                    onSelectCategory={(category) => {this.setState({selectedCategory: category})}}
                    selectedCategory={selectedCategory}
                />
                <PriceForm
                    item={editItem}
                    onFormSubmit={this.submitFrom}
                    onCancelSubmit={this.cancelSubmit}
                />
            </div>
        )
    }
}

export default withRouter(WithContext(Create))