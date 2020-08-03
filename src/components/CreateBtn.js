import React from 'react'
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'

const CreateBtn = ({btnName, iconName, callBack}) => {
    return (
        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={callBack}>
            <Ionicon
                className="rounded-circle mr-2"
                fontSize="25px"
                style={{backgroundColor: '#fff'}}
                color={'#007bff'}
                icon={iconName}
            />
            {btnName}
        </button>
    )
}

CreateBtn.prototype = {
    btnName: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    callBack: PropTypes.func.isRequired
}

export default CreateBtn