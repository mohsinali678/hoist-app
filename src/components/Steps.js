import React from 'react';
import {
    LineChart,
    Line,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';


const Steps = () => {
    const data = [
        { day: 'Day 1', steps: 10_120, amt: 10_120 },
        { day: 'Day 2', steps: 15_098, amt: 15_089 },
        { day: 'Day 3', steps: 8_456, amt: 8_456 }
    ]
    return (
        <div className='chart'>
            
                <LineChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5}}>
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

export default Steps;