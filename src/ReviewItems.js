import React from 'react'
import Stars from './Stars.js'


function ReviewItems(props)
{         
    var sty={};
    if(props.idNo>=4)
     sty={
        width:"327px",
        height:"210px",
        display:"none",
        
        
        }
        else
        sty={
            width:"327px",
            height:"210px",
            
            }
    
    
    
        const idValue= "itemOfReview"+props.idNo;
        console.log(props.idNo);
    
    
   const item= 
   <div className="itemOfReview" id={idValue} style={sty}>
       <div style={{padding:"10px"}}>
           
       
       <h4 style={{fontSize:"18px"}}>{props.name}</h4>
        <Stars stars={props.stars} />
     
       <h4 style={{fontSize:"14px"}}>{props.comment}</h4>
       </div>
   </div>
   return (item)
}
export default ReviewItems
