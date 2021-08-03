import React from 'react'
import call from './call.png'



function ReviewItems(props)
{         
    var sty={};
    if(props.idNo>=4)
     sty={
        width:"327px",
        //height:"210px",
        display:"none",
        
        
        }
        else
        sty={
            width:"327px",
           // height:"210px",
            
            }
    
    
    
        const idValue= "itemOfReview_1"+props.idNo;
        console.log(props.idNo);
    
    
   const item= 
   <div className="itemOfReview_1" id={idValue} style={sty}>
       <div style={{padding:"10px"}}>
           
       
       <img src={props.name} alt=" "></img>
        
       
       <h2 style={{fontSize:"18px"}}>{props.comment}</h2>
       <h4 style={{fontSize:"14px"}}>{props.image}</h4>
       </div>
   </div>
   return (item)
}
export default ReviewItems
