import React, { Component } from 'react'
import { AppContext } from './App'

const WithContext = (Component) => {
    return (props) => (
        <AppContext.Consumer>
        {({ state }) => {
            return <Component {...props} data={state}/>
        }}
        </AppContext.Consumer>
    )
}

export default WithContext