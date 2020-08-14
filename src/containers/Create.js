import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CategorySelect from '../components/CategorySelect'
import { Tabs, Tab } from '../components/Tabs'
import PriceForm from '../components/PriceForm'
import WithContext from '../WithContext'
import { withRouter } from 'react-router-dom'
import { TYPE_OUTCOME, TYPE_INCOME } from '../utility'

const tabsText = [TYPE_OUTCOME, TYPE_INCOME]
class Create extends React.Component {
    constructor(props) {
        super(props)
        const { id } = props.match.params
        const { categories, items } = props.data
        this.state = {
            selectedTab: (id && items[id]) ? categories[items[id].cid].type : TYPE_OUTCOME,
            selectedCategory: ( id && items) ? categories[items[id].cid] : null
        }
    }

    tabChange = (index) => {
        this.setState({
            selectedTab: tabsText[index]
        })
    }

    submitFrom = (data, editMode) => {
        if (editMode) {
            // create
            this.props.actions.createItem(data, this.state.selectedCategory.id)
        } else {
            // update
            this.props.actions.updateItem(data, this.state.selectedCategory.id)
        }
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
            }})
        .filter((e) => {return e})
        const tabIndex = tabsText.findIndex(text => text === selectedTab)
        console.log(selectedCategory)

        return (
            <div className="container py-3 px-5 align-items-center">
                <Tabs activeIndex={tabIndex} onTabChange={this.tabChange}>
                    <Tab>
                        outcome
                    </Tab>
                    <Tab>
                        income
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