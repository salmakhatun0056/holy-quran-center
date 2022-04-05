import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewDetail.css'

const ReviewDetail = (props) => {
    const { name, img, review } = props.review
    return (
        <div className='review-detail-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2 className='review-name'>{name}</h2>
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
};

export default ReviewDetail;