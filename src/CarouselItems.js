import React from 'react'
import call from './call.png'



function CarouselItems(props)
{         
    var sty={};
    if(props.idNo>=5)
     sty={
        width:"227px",
       // height:"210px",
        display:"none",
        
        
        }
        else
        sty={
            width:"227px",
            //height:"210px",
            
            }
    
    
    
        const idValue= "itemOfReviews"+props.idNo;
        console.log(props.idNo);
    
    
   const item= 
   <div className="itemOfReviews" id={idValue} style={sty}>
       <div style={{padding:"10px"}}>
           
       
       <img src={props.name} alt=" "></img>
        
     
       <h2 style={{fontSize:"18px"}}>{props.comment}</h2>
       <h4 style={{fontSize:"14px", textAlign: 'left'}}>{props.image}</h4>
       </div>
   </div>
   return (item)
}
export default CarouselItems
