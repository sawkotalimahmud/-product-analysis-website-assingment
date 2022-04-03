import React, { useEffect, useState } from 'react';
import ReviewCart from '../ReviewCart/ReviewCart';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`reviewData.json`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <div>
            {
                reviews.map(review => <ReviewCart key={review._id}
                    review={review}></ReviewCart>
                )
            }
        </div >
    );
};

export default Reviews;