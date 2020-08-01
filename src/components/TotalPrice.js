import React from 'react'
import PropTypes from 'prop-types'

const TotalPrice = ({income, outcome}) => {
    return (
        <div className="container align-items-center mt-2">
            <div className="row">
                <div className="col">
                    <a>收入：{income}</a>
                </div>
                <div className="col">
                    <a>支出：{outcome}</a>
                </div>
            </div>
        </div>   
    )
}

TotalPrice.prototype = {
    income: PropTypes.number.isRequired,
    outcome: PropTypes.number.isRequired
}

export default TotalPrice