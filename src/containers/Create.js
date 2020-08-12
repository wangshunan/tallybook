import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CategorySelect from '../components/CategorySelect'
import { Tabs, Tab } from '../components/Tabs'
import PriceForm from '../components/PriceForm'
import { testItems } from './Home'
import Ionicon from 'react-ionicons'
import WithContext from '../WithContext'

const categories = [
    {
        "id": 1,
        "name": "旅行",
        "type": "outcome",
        "iconName": "ios-plane",
        "isActive": false
    },
    {
        "id": 2,
        "name": "理财",
        "type": "income",
        "iconName": "logo-yen",
        "isActive": true
    },
    {
        "id": 3,
        "name": "理财",
        "type": "outcome",
        "iconName": "logo-yen",
        "isActive": false
    }
]

class Create extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.data)
        return (
            <div className="container py-3 px-5 align-items-center">
                <Tabs activeIndex={0} onTabChange={() => {}}>
                    <Tab>
                        <Ionicon
                            className="rounded mr-2"
                            fontSize="25px"
                            color={'#007bff'}
                            icon='ios-paper'
                        />
                        income
                    </Tab>
                    <Tab>
                        <Ionicon
                            className="rounded mr-2"
                            fontSize="25px"
                            color={'#007bff'}
                            icon='ios-paper'
                        />
                        outcome
                    </Tab>
                </Tabs>
                    <CategorySelect
                        categories={categories}
                        onSelectCategory={(id) => {console.log(id)}}
                />
                <PriceForm
                    item={testItems[0]}
                    onFormSubmit={(data, isNew) => {console.log(data); console.log(isNew)}}
                    onCancelSubmit={() => {}}
                />
            </div>
        )
    }
}

export default WithContext(Create)