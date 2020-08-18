import React from 'react'
import PropTypes from 'prop-types'
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts'
import { Colors } from '../utility'

const ColorsArr = Object.keys(Colors).map(key => Colors[key])

const CustomPieChart = ({ title, categoryData }) => {
    if ( categoryData.length === 0 ) {
        return <h4 className="text-center mt-3">{title}没有数据</h4>
    }

    return (
        <div className="pie-chart-component">
            <h4 style={{textAlign: 'center'}} className="mt-3 mb-0">{title}</h4>
            <ResponsiveContainer width={'100%'} height={300}>
            <PieChart>
                <Pie 
                    isAnimationActive={true} 
                    data={categoryData}
                    dataKey="value"
                    cx='50%' cy='50%' 
                    outerRadius={100} fill={Colors.blue} label
                    >
                {
                    categoryData.map((entry, index) => <Cell key={index} fill={ColorsArr[index % ColorsArr.length]}/>)
                }
                </Pie>
                <Tooltip/>
            </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

CustomPieChart.propTypes = {
    title: PropTypes.string,
    categoryData: PropTypes.array
}

export default CustomPieChart