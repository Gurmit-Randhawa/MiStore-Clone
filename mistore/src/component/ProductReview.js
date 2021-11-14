import React from 'react';
import {ReviewCard} from '../component/ReviewCard.js';
import '../style/ProductReview.css'

const ProductReview = ({productReviews}) => {
    return (
        <>
            <div className="productreview">
                <ReviewCard reviews={productReviews} />
            </div>
        </>
    )
}

export {ProductReview};
