import { useEffect, useState } from 'react';
import { Bar, BarChart, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

import './DashBoard.css'

const DashBoard = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='chart-container'>
            <div>
                <h2>Month Wise Sell</h2>
                <LineChart height={300} width={600} data={data}>
                    <Line dataKey={"sell"}></Line>
                    <Tooltip></Tooltip>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                </LineChart>
            </div>
            <div>
                <h2>Investment vs Revenue</h2>
                <BarChart width={600} height={300} data={data}>
                    <Bar dataKey={'investment'} fill={'#8884d8'}></Bar>
                    <Tooltip></Tooltip>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                </BarChart>
            </div>
            <div>
                <h2>Investment vs Revenue</h2>
                <PieChart width={600} height={300}>
                    <Pie data={data} dataKey="sell" nameKey="month" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" />

                    <Pie data={data} dataKey="sell" nameKey="month" cx="50%" cy="50%" innerRadius={95} outerRadius={120} fill="#82ca9d" label />
                </PieChart>
            </div>
        </div>
    );
};

export default DashBoard;