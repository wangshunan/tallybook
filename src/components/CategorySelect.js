import React from 'react'
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'
import { Colors } from '../utility'

class CategorySelect extends React.Component {
    constructor(props) {
        super(props)
    }

    setSelectedCategory = (e, category) => {
        e.preventDefault()
        this.props.onSelectCategory(category)
    }

    render() {
        const { categories, selectedCategory } = this.props
        const selectedCategoryId = selectedCategory && selectedCategory.id
        return (
            <div className="container category-select-component mb-4">
                <div className="row">
                    {
                        categories.map((category, index) => {
                            const iconColor = (category.id === selectedCategoryId) ? Colors.white : Colors.gray
                            const backColor = (category.id === selectedCategoryId) ? Colors.blue : Colors.lightGray
                            const activeClassName = (selectedCategoryId === category.id) ? 
                            'category-item col-3 active' : 'category-item col-3'
                            return (
                                <div className={activeClassName} key={index} style={{ textAlign: 'center'}}>
                                    <Ionicon
                                        className="rounded-circle"
                                        fontSize="50px"
                                        style={{ backgroundColor: backColor, padding: "5px", cursor: "pointer" }}
                                        color={iconColor}
                                        icon={category.iconName}
                                        onClick={(e) => {this.setSelectedCategory(e,category)}}
                                    />
                                    <p>{category.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

CategorySelect.propTypes = {
    categories: PropTypes.array.isRequired,
    onSelectCategory: PropTypes.func.isRequired,

}

export default CategorySelect