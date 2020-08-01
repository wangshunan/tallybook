import React from 'react'
import PropTypes from 'prop-types'
import { padLeft } from '../utility'

class MonthPicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: true
        }
    }

    toggleDropdown = (e) => {
        e.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render () {
        const { year, month } = this.props
        const { isOpen } = this.state
        return (
            <div className="dropdown">
                <button 
                className="btn btn-lg btn-secondary dropdown-toggle"
                onClick={this.toggleDropdown}
                >
                    <h4>选择月份</h4>
                    {`${year}年 ${padLeft(month)}月`}
                </button>
                { isOpen && 
                    <div className="dropdown-menu"  style={{display: 'block'}}>
                        <div className="row"> 
                            <div className="col ml-2"> 
                                <h2>test</h2>
                            </div>
                            <div className="col mr-2"> 
                                <h2>test</h2>
                            </div>
                        </div>
                        
                    </div>
                }
            </div>
        )
    }
}

export default MonthPicker