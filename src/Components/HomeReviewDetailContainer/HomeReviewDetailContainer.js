import React from 'react';
import useFakeData from '../../hooks/useFakeData';
import HomeReviewDetail from '../HomeReviewDetail/HomeReviewDetail';

const HomeReviewDetailContainer = () => {
    const [reviews, setReview] = useFakeData()
    return (
        <div className='ReviewsDetailContainer'>
            {
                reviews.slice(0, 3).map(review => <HomeReviewDetail
                    key={review.id}
                    review={review}
                ></HomeReviewDetail>)
            }
        </div>
    );
};

export default HomeReviewDetailContainer;