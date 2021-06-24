import React from 'react'

import ReviewItems from './ReviewItems.js'
import ReviewData from './ReviewData.js'

function ReviewContainer(){
const reviewComponents = ReviewData.map(review => <ReviewItems key={review.id} idNo={review.id} name={review.name} 
    stars= {review.stars} 
    comment={review.comment} ></ReviewItems> 
     )
     
    return(reviewComponents)

}










export default ReviewContainer
