import React from 'react';
import {
    LineChart,
    Line,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    XAxis,
    YAxis
} from 'recharts';
import { useParams } from 'react-router-dom';

const StatView = ({ formData }) => {
    const data = [
        {day: 'Day 1'},
        {day: 'Day 2'},
        {day: 'Day 3'}
    ]
    return (
        <ResponsiveContainer width='100%' height='100%'>
            <LineChart
                width={600}
                height={300}
                data={data}
            />
            <CartesianGrid strokeDasharray='2 2' />
            
        </ResponsiveContainer>
    )
}

export default StatView;
