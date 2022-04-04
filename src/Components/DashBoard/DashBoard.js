import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyPieChart from '../MyPieChart/MyPieChart';
import './DashBoard.css'

const DashBoard = () => {

    return (
        <div className='chart-container'>
            <div>
                <h2>Month Wise Sell</h2>
                <MyLineChart></MyLineChart>
            </div>
            <div>
                <h2>Investment vs Revenue</h2>
                <MyBarChart></MyBarChart>
            </div>
            <div>
                <h2>Investment vs Revenue</h2>
                <MyPieChart></MyPieChart>
            </div>
        </div>
    );
};

export default DashBoard;