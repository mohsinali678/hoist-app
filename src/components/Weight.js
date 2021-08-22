import React from 'react'
import {
    LineChart,
    Line,
    CartesianGrid,
    Tooltip,
    
    XAxis,
    YAxis
} from 'recharts';

const Weight = () => {
    const data = [
        { day: 'Day 1', weight: 161 },
        { day: 'Day 2', weight: 158 },
        { day: 'Day 3', weight: 160 }
    ]

    return (
        <div class='chart'>
            
                <LineChart
                    width={600}
                    height={300}
                    data={data}>
                    <CartesianGrid strokeDasharray='2 2' />
                    <Line
                        type='monotone'
                        dataKey='steps'
                        stroke='#888888' />
                    <XAxis dataKey='day' />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            
        </div>
    )
};

export default Weight;
