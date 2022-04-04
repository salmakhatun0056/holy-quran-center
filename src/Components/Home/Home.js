import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-detail">
                <h1 className='home-title'>Your best choice is the<br /><span className='title-style'>Holy Quran</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magnam provident nostrum quas inventore harum?</p>
                <button>Live Demo</button>
            </div>
            <div className="home-picture">
                <img src="photo-1.jpg" alt="" />
            </div>
        </div>
    );
};

export default Home;