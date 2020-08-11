import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CategorySelect from '../components/CategorySelect'
import PriceForm from '../components/PriceForm'
import { testItems } from './Home'

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
        "type": "income",
        "iconName": "logo-yen",
        "isActive": false
    }
]

const Create = () => {
    return (
        <div className="container py-3 px-5">
            <div className="align-items-center">
                <CategorySelect
                    categories={categories}
                    onSelectCategory={(id) => {console.log(id)}}
                />
            </div>
            <div className="py-3">
                <PriceForm
                    item={testItems[0]}
                    onFormSubmit={(data, isNew) => {console.log(data); console.log(isNew)}}
                    onCancelSubmit={() => {}}
                />
            </div>
        </div>
    )
}

export default Create