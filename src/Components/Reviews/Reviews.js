import React from 'react';
import ReviewsDetailContainer from '../ReviewsDetailContainer/ReviewsDetailContainer';
import './Reviews.css'


const Reviews = () => {
    return (
        <div>
            <h1 className='review-title'>What Our Customers Say??</h1>
            <ReviewsDetailContainer></ReviewsDetailContainer>
        </div>
    );
};

export default Reviews;