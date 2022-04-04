import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyBarChart = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <BarChart width={600} height={300} data={data}>
            <Bar dataKey={'investment'} fill={'#8884d8'}></Bar>
            <Tooltip></Tooltip>
            <XAxis dataKey="month"></XAxis>
            <YAxis></YAxis>
        </BarChart>
    );
};

export default MyBarChart;