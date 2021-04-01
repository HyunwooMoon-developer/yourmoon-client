import React from 'react';
import './RatingStar.css';

const RatingStar = ({rating}) => {
    const stars = [
        {filled : false},
        {filled : false},
        {filled : false},
        {filled : false},
        {filled : false},
    ]

    for(let i = 0 ;i < rating; i++){
        stars[i].filled = true;
    }

    return (
        <div className="review-rating">
        {stars.map((star, index) => <Star key={index} filled={star.filled} />)}
        </div>
    );
};


function Star({filled}){
    const star = filled ? 'fa fa-star' : 'fa fa-star-o'
    return <i className={star} />
}

export default RatingStar;
