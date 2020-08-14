import React from 'react'
import PropTypes from 'prop-types'
import { padLeft, range } from '../utility'

class MonthPicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            selectedYear: this.props.year,
            selectedMonth: this.props.month
        }
    }

    toggleDropdown = (e) => {
        e.preventDefault()

        if ( !this.state.isOpen ) {
            this.setState({
                isOpen: true
            })
            // if the clicked element is not this element, then close the dropdown menu
            document.addEventListener('mouseup', this.handleClikeOutSide)
        } else {
            this.closeComponent()
        }
    }

    handleClikeOutSide = (e) => {
        const onClickItem = e.target.className.includes('dropdown-item')
        const onClickToggle = e.target.className.includes('dropdown-toggle')
        if ( !onClickItem && !onClickToggle ) {
            this.closeComponent()
        }
    }

    closeComponent = () => {
        this.setState({
            isOpen: false
        })
        document.removeEventListener('mouseup', this.handleClikeOutSide)
        this.props.onChange({year: this.state.selectedYear, month: this.state.selectedMonth})
    }

    selecteYear = (e, yearNumber) => {
        e.preventDefault()
        this.setState({
            selectedYear: yearNumber
        })
    }

    selecteMonth = (e, monthNumber) => {
        e.preventDefault()
        this.setState({
            selectedMonth: monthNumber
        }, () => {
            this.closeComponent()
        })
    }

    render () {
        const { year, month } = this.props
        const { isOpen } = this.state
        const monthRange = range(12, 1)
        const yearRange = range(9, -4).map(number => year + number)

        return (
            <div className="dropdown">
                <h4>选择月份</h4>
                <button 
                className="btn btn-lg btn-secondary dropdown-toggle"
                onClick={this.toggleDropdown}
                >
                    {`${this.state.selectedYear}年 ${padLeft(this.state.selectedMonth)}月`}
                </button>
                { isOpen && 
                    <div className="dropdown-menu"  style={{display: 'block'}}>
                        <div className="row"> 
                            <div className="col border-right ml-2 years-range"> 
                            { yearRange.map((yearNumber, index) => 
                                <a 
                                className={ yearNumber === this.state.selectedYear ? "dropdown-item active" : "dropdown-item" } 
                                herf="#" 
                                key={index}
                                onClick={(e)=> {this.selecteYear(e, yearNumber)}}>
                                    {yearNumber} 年
                                </a>
                            )}
                            </div>
                            <div className="col mr-2 months-range"> 
                            { monthRange.map((monthNumber, index) => 
                                <a 
                                className={ monthNumber === this.state.selectedMonth ? "dropdown-item active" : "dropdown-item" } 
                                herf="#" 
                                key={index}
                                onClick={(e) => {this.selecteMonth(e, monthNumber)}}>
                                    {padLeft(monthNumber)} 月
                                </a>
                            )}
                            </div>
                        </div>
                        
                    </div>
                }
            </div>
        )
    }
}

MonthPicker.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default MonthPicker