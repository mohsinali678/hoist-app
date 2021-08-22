import React from 'react'
import {
    LineChart,
    Line,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    XAxis,
    YAxis
} from 'recharts';

const Water = () => {
    const data = [
        { day: 'Day 1', water: 16, amt: 16 },
        { day: 'Day 2', water: 28, amt: 28 },
        { day: 'Day 3', water: 13, amt: 13 },
    ]
    return (
        <div className='chart'>
            
                <LineChart
                    width={600}
                    height={300}
                    data={data}>
                    <CartesianGrid strokeDasharray='2 2' />
                    <Line
                        type='monotone'
                        dataKey='water'
                        stroke='#888888' />
                    <XAxis dataKey='day' />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            
        </div>
    )
};

export default Water;
