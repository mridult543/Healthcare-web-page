import React from 'react'
import CarouselItems from './CarouselItems.js'
import CarouselData from './CarouselData.js'


function CarouselContainer(){
    const reviewComponents = CarouselData.map(review => <CarouselItems key={review.id} idNo={review.id} name={review.name} 
        stars= {review.stars} 
        comment={review.comment} image= {review.image} ></CarouselItems> 
         )
         
        return(reviewComponents)
    
    }


    export default CarouselContainer