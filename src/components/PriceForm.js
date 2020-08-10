import React from 'react'
import PropTypes from 'prop-types'

class PriceForm extends React.Component{
    constructor(props) {
        super(props)
    }

    static propTypes = {
        onFormSubmit: PropTypes.func.isRequired,
        onCancelSubmit: PropTypes.func.isRequired,
        item: PropTypes.object,
    }
    
    static defaultProps = {
        item: {}
    }

    render() {
        const { title, price, date } = this.props.item
        return(
            <form>
                <div className="form-group">
                    <label>标题</label>
                    <input defaultValue={title ? title : ''} type="text" minLength="1" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>金额</label>
                    <input defaultValue={price ? price : null} type="number" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="date">日期 *</label>
                    <input defaultValue={date ? date : null} type="date" min="1" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary mr-4">Submit</button>
                <button type="submit" className="btn btn-secondary">Cancel</button>
            </form>
        )
    }

}

export default PriceForm