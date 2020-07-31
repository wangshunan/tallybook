import React from 'react'

const PriceList = ({items, onMordifyItem, onDeleteItem}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                items.map((item) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center row" key={item.id}>
                        <span className="col-1 badge badge-primary">{item.category.name}</span>
                        <span className="col-5">{item.title}</span>
                        <span className="col-1">{item.category.type === 'income'? '+' : '-' + item.price}</span>
                        <span className="col-1">{item.date}</span>
                        <button className="col-2 btn btn-primary" onClick={() => {onMordifyItem(item)}}>编辑</button>
                        <button className="col-2 btn btn-danger" onClick={onDeleteItem}>删除</button>
                    </li>
                ))
            }
        </ul>
    )
}

export default PriceList