import React from 'react'
import {LIST_VIEW, CHART_VIEW} from '../../utility'
import { shallow } from 'enzyme'
import ViewTab from '../ViewTab'
import toJson from 'enzyme-to-json';

const props = {
    activeTab: LIST_VIEW,
    onTabChange: jest.fn()
}

describe('test ViewTab component', () => {
    const wrapper = shallow(<ViewTab {...props}/>)

    it('should render the component to match snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('should render correct active tabType', () => {
        expect(wrapper.find(`.${LIST_VIEW}`).hasClass('active')).toBe(true)
    })


    it('should trigger the correct function callbacks', () => {
        const firstItem = wrapper.find('.nav-link').first()
        firstItem.find('a').first().simulate('click', { preventDefault: () => {} })
        expect(props.onTabChange).toHaveBeenCalledWith(LIST_VIEW)

        firstItem.find('a').last().simulate('click', { preventDefault: () => {} })
        expect(props.onTabChange).toHaveBeenCalledWith(LIST_VIEW)
    })
})