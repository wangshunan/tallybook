import React from 'react'

export const LIST_VIEW = 'list'
export const CHART_VIEW = 'chart'
export const TYPE_INCOME = 'income'
export const TYPE_OUTCOME = 'outcome'

export const $ = (id) => {
    return document.getElementById(id)
}

export const padLeft = (n) => {
    return n < 10 ? '0' + n : n
}

export const range = (size, startAt = 0) => {
    const arr = []
    for ( let i = 0; i < size; i++ ) {
        arr[i] = startAt + i
    }

    return arr
}

export const parseToYearAndMonth = (str) => {
    const date = str ? new Date(str) : new Date()

    return {
        year: date.getFullYear(),
        month: date.getMonth()
    }
}

export const flatternArr = (arr) => {
    return arr.reduce((map, item) => {
        map[item.id] = item
        return map
    }, {})
}

export const Colors = {
    blue: '#347eff',
    deepBlue: '#61dafb',
    green: '#28a745',
    red: '#dc3545',
    gray: '#555',
    lightGray: '#efefef',
    white: '#fff'
}