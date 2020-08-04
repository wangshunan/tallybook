import React from 'react'
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'
import {LIST_VIEW, CHART_VIEW} from '../utility'

const generateLinkClass = (current, view) => {
    return current === view ? `nav-link active ${view}` : `nav-link ${view}`
}

const ViewTab = ({activeTab, onTabChange}) => {
    return (
        <ul className="nav nav-tabs nav-fill my-4">
            <li className="nav-item">
                <a                     
                className={generateLinkClass(activeTab, LIST_VIEW)}
                href="#"
                onClick={(e) => {e.preventDefault(); onTabChange(LIST_VIEW)}}
                >
                    <Ionicon
                        className="rounded mr-2"
                        fontSize="25px"
                        color={'#007bff'}
                        icon='ios-paper'
                    />
                    List
                </a>
            </li>
            <li className="nav-item">
                <a 
                className={generateLinkClass(activeTab, CHART_VIEW)}
                href="#"
                onClick={(e) => {e.preventDefault(); onTabChange(CHART_VIEW)}}
                >
                    <Ionicon
                        className="rounded ml-2"
                        fontSize="25px"
                        color={'#007bff'}
                        icon='ios-pie'
                    />
                    Chart
                </a>
            </li>
        </ul>
    )
}

ViewTab.propTypes = {
    activeTab: PropTypes.string.isRequired,
    onTabChange: PropTypes.func.isRequired
}

export default ViewTab