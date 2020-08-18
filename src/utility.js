export const LIST_VIEW = 'list'
export const CHART_VIEW = 'chart'
export const TYPE_INCOME = 'income'
export const TYPE_OUTCOME = 'outcome'
export const TAB_TEXT = [LIST_VIEW, CHART_VIEW]

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

export const ID = () => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
}

export const parseToYearAndMonth = (str) => {
    const date = str ? new Date(str) : new Date()
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
    }
}
export const generateChartDataByCategory = (items, type = TYPE_OUTCOME) => {
    let categoryMap = { }
    items.filter(item => item.category.type === type).forEach((item) => {
        if (categoryMap[item.cid]) {
            categoryMap[item.cid].value += (item.price * 1)
            categoryMap[item.cid].items = [...categoryMap[item.cid].items, item.id]
            } else {
            categoryMap[item.cid] = {
                name: item.category.name,
                value: item.price * 1,
                items: [item.id]
            }
        }
    })
    return Object.keys(categoryMap).map(mapKey => ({ ...categoryMap[mapKey] }))
}