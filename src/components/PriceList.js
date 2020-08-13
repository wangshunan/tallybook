import React from 'react'
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'

const PriceList = ({items, onModifyItem, onDeleteItem}) => {
    return (
        <ul className="list-group">
            {
                items.map((item) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center row" key={item.id} style={{margin:'0px'}}>
                        <span className="col-1 badege badege-primary">
                            <Ionicon
                                className="rounded"
                                fontSize="30px"
                                style={{backgroundColor: '#007bff', padding:'5px'}}
                                color={'#fff'}
                                icon={item.category.iconName}
                            />
                        </span>
                        <span className="col-6">{item.title}</span>
                        <span className="col-1">{(item.category.type === 'income'? '+' : '-') + item.price}</span>
                        <span className="col-2">{item.date}</span>
                        <a className="col-1" role="button" onClick={(e) => {e.preventDefault(); onModifyItem(item.id)}}>
                            <Ionicon
                                className="rounded"
                                fontSize="30px"
                                style={{backgroundColor: '#28a745', padding:'5px'}}
                                color={'#fff'}
                                icon='ios-create-outline'
                            />
                        </a>
                        <a className="col-1" role="button" onClick={(e) => {e.preventDefault(); onDeleteItem(item.id)}}>
                            <Ionicon
                                className="rounded"
                                fontSize="30px"
                                style={{backgroundColor: '#dc3545', padding:'5px'}}
                                color={'#fff'}
                                icon='ios-close'
                            />
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}

PriceList.prototype = {
    item: PropTypes.array.isRequired,
    onMordifyItem: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired
}

PriceList.defaultProps = {
    item: []
}

export default PriceList