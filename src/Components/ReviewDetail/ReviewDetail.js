import React from 'react';

const ReviewDetail = (props) => {
    const { name, img } = props.review
    return (
        <div>
            <h1>{name}</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default ReviewDetail;