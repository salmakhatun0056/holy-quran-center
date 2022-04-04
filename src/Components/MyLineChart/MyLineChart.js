import React, { useEffect, useState } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const MyLineChart = () => {
    const [data, setData] = useChart()
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