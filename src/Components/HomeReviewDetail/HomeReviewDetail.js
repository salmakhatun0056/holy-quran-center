import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const HomeReviewDetail = (props) => {
    const { name, img, review } = props.review
    return (
        <div className='review-detail-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h1>{name}</h1>
                <p>{review}</p>
                <div className='star-icon'>
                    <FontAwesomeIcon className='delete-icon' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='delete-icon' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='delete-icon' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='delete-icon' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='delete-icon' icon={faStar}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};;

export default HomeReviewDetail;