import React from 'react'
import Ionicon from 'react-ionicons'
import { mount } from 'enzyme'
import CategorySelect from '../CategorySelect'

export const categories = [
    {
        "id": 1,
        "name": "旅行",
        "type": outcome,
        "iconName": "ios-plane"
    },
    {
        "id": 2,
        "name": "理财  ",
        "type": income,
        "iconName": "logo-yen"
    },
    {
        "id": 3,
        "name": "理财",
        "type": income,
        "iconName": "logo-yen"
    }
]

let props = {
    categories,
    onSelectCategory: jest.fn()
}

describe('test CategorySelect Component', () => {
     
})