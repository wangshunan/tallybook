import React from 'react'
import PropTypes from 'prop-types'

const TotalPrice = ({income, outcome}) => {
    return (
        <div className="container align-items-center mt-2">
            <div className="row">
                <div className="col">
                    <h5 className="income">收入：<span>{income}</span></h5>
                </div>
                <div className="col">
                    <h5 className="outcome">支出：<span>{outcome}</span></h5>
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