import React from 'react'
import ReviewItems from './SlideItems.js'
import ReviewData from './SlideData.js'


function ReviewContainer(){
    const reviewComponents = ReviewData.map(review => <ReviewItems key={review.id} idNo={review.id} name={review.name} 
        stars= {review.stars} 
        comment={review.comment} image= {review.image} ></ReviewItems> 
         )
         
        return(reviewComponents)
    
    }










export default ReviewContainer
