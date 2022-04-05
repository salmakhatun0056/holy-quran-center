import React from 'react';

import './Home.css'
import { Link } from 'react-router-dom';
import useFakeData from '../../hooks/useFakeData';
import ReviewDetail from '../ReviewDetail/ReviewDetail';

const Home = () => {
    const [reviews, setReview] = useFakeData()
    return (
        <div >
            <main className="home-container">
                <div className="home-detail">
                    <h1 className='home-title'>Your best choice is the<br /><span className='title-style'>HOLY QURAN</span></h1>
                    <p>Quran education is essential to keep your life beautiful and full of peace. Because there is a path of light in the Quran.Our purpose is to bring everyone to the path of this light. Come We all pray and read the Qur'an every day.</p>
                </div>
                <div className="home-picture">
                    <img src="photo-1.jpg" alt="" />
                </div>
            </main>
            <div>
                <div>
                    <h2 className='home-reviews-title'>Customer Reviews (3)</h2>
                    <div className='ReviewsDetailContainer'>
                        {
                            reviews.slice(0, 3).map(review => <ReviewDetail
                                key={review.id}
                                review={review}
                            ></ReviewDetail>)
                        }
                    </div>
                </div>
            </div>
            <div className='see-all-reviews-link'>
                <button ><Link to='/reviews'>See All Reviews</Link></button>
            </div>
        </div >

    );
};

export default Home;