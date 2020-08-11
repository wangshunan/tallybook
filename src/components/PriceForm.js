import React from 'react'
import PropTypes from 'prop-types'
import { $ } from '../utility'

class PriceForm extends React.Component{
    constructor(props) {
        // props: onFormSubmit, onCancelSubmit, item
        super(props)
        this.state = {
            titleCheck: true,
            priceCheck: true,
            dateCheck: true
        }
    }

    static propTypes = {
        onFormSubmit: PropTypes.func.isRequired,
        onCancelSubmit: PropTypes.func.isRequired,
        item: PropTypes.object,
    }
    
    static defaultProps = {
        item: {}
    }


    onFormSubmit = (e) => {
        e.preventDefault()
        const { onFormSubmit, item } = this.props
        const title = $('form-title').value.trim()
        const price = $('form-price').value * 1
        const date = $('form-date').value

        this.setState({
            titleCheck: this.dataCheck(title, "str"),
            priceCheck: this.dataCheck(price, "num"),
            dateCheck: this.dataCheck(date, "date")
        }, () => {
            const { titleCheck, priceCheck, dateCheck } = this.state
            if ( !titleCheck || !priceCheck || !dateCheck ) {
                return
            }

            const isNew = Object.keys(item).length === 0
            const newItem = { ...item, title, price, date}
            onFormSubmit(newItem, isNew)
        })

    }

    dataCheck = (data ,dataType) => {
        switch(dataType) {
            case "num":
                return data > 0
            case "str":
                return data.length > 0
            case "date":
                return data.length > 0
            default:
                return false
        }
    }

    render() {
        const { title, price, date } = this.props.item
        const { titleCheck, priceCheck, dateCheck } = this.state
        return(
            <form>
                <div className="form-group">
                    <label>标题 *</label>
                    <input defaultValue={title ? title : ''} type="text" id="form-title" className="form-control"/>
                    <small id="title-err" className="form-text text-danger input-err">
                        { !titleCheck && "请输入正确标题" }
                    </small>
                </div>
                <div className="form-group">
                    <label>金额 *</label>
                    <input defaultValue={price ? price : undefined} type="number" id="form-price" className="form-control"/>
                    <small id="price-err" className="form-text text-danger input-err">
                        { !priceCheck && "请输入正确金额" }
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="date">日期 *</label>
                    <input defaultValue={date ? date : null} type="date" id="form-date" className="form-control"/>
                    <small id="date-err" className="form-text text-danger input-err">
                        { !dateCheck && "请输入日期" }
                    </small>
                </div>
                <div className="button-group justify-content-end">
                    <button type="submit" className="btn btn-primary mr-4" onClick={this.onFormSubmit}>Submit</button>
                    <button type="submit" className="btn btn-secondary" onClick={() => {this.props.onCancelSubmit()}}>Cancel</button>
                </div>
            </form>
        )
    }

}

export default PriceForm