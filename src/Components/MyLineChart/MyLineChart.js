import React, { useEffect, useState } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <LineChart height={300} width={600} data={data}>
            <Line dataKey={"sell"}></Line>
            <Tooltip></Tooltip>
            <XAxis dataKey="month"></XAxis>
            <YAxis></YAxis>
        </LineChart>
    );
};

export default MyLineChart;