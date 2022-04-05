import React from 'react';
import useFakeData from '../../hooks/useFakeData';
import ReviewDetail from '../ReviewDetail/ReviewDetail'
import './ReviewDetailContainer.css'


const ReviewsDetailContainer = () => {
    const [reviews, setReview] = useFakeData()
    return (
        <div className='ReviewsDetailContainer'>
            {
                reviews.map(review => <ReviewDetail
                    key={review.id}
                    review={review}
                ></ReviewDetail>)
            }

        </div>
    );
};


export default ReviewsDetailContainer;