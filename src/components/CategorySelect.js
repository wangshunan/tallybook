import React from 'react'
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'
import { Colors } from '../utility'

class CategorySelect extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCategoryId: props.categories.filter(category => category.isActive === true)[0].id
        }
    }

    setSelectedCategory = (id) => {
        this.setState({
            selectedCategoryId: id
        }, () => {
            this.props.onSelectCategory(this.state.selectedCategoryId)
        })
    }

    render() {
        const { categories, onSelectCategory } = this.props
        return (
            <div className="container category-select-component mb-4">
                <div className="row">
                    {
                        categories.map((category, index) => {
                            const iconColor = (category.id === this.state.selectedCategoryId) ? Colors.white : Colors.gray
                            const backColor = (category.id === this.state.selectedCategoryId) ? Colors.blue : Colors.lightGray
                            const activeClassName = category.isActive ? 
                            'category-item col align-self-center active' : 'category-item col align-self-center'

                            return (
                                <div className={activeClassName} key={index} onClick={() => {this.setSelectedCategory(category.id)}}>
                                    <Ionicon
                                        className="rounded-circle border border-primary"
                                        fontSize="50px"
                                        style={{ backgroundColor: backColor, padding: '5px' }} 
                                        color={iconColor}
                                        icon={category.iconName}
                                    />
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