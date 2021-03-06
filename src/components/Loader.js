import React from 'react'
import Ionicon from 'react-ionicons'

const Loader = () => {
    return(
        <div className="loading-component text-center ">
            <Ionicon
                icon="ios-refresh"
                fontSize="40px"
                color="#347eff"
                rotate={true}
            />
        </div>
    )
}

export default Loader