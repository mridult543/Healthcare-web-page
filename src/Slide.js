import React from 'react'
import ReviewContainer from './ReviewContainer'
import ReviewData from './ReviewData.js'
const len=ReviewData.length;
function Review(){
var total=0;
for(var i=0;i<ReviewData.length;i++)
total=total+ReviewData[i].stars;
const avg=parseInt(total/(len+1));


const abc=
<div style={{ paddingTop:"40px",paddingBottom:"20px"}}>
    

<div style={{display:"flex", alignItems:"center"}}>
<button onClick={previous} className="NavButton">{'<'}</button>
<div style={{display: "flex",overflow:"hidden" }}>
   
    
    <div className="itemOfReview" style={{width:"387px",height:"248px"}}>
         <h2 style={{fontSize:"25px" ,textAlign: 'left'}}>Your peace of mind is </h2>
         <h1 style={{fontSize:"25px" ,textAlign: 'left'}}>our number one priority</h1>
        <h4 style={{textAlign: 'left'}}> UniversaCare offers a range of services for in-home care.  We are your partners in care, and work with you to come up with a plan of action.</h4>
    </div>
    <ReviewContainer/>
</div>
<button onClick={next} className="NavButton">{'>'}</button>
</div>
</div>
return(abc)
}
export default Review
var val=4;


function next()
{
  val++;
  for(var i=1;i<=len;i++)
  {   var idNum= "itemOfReview_1"+i;
  if(i<(val-3)|| i>val)
      document.getElementById(idNum).style.display="none";
      else
      document.getElementById(idNum).style.display="block";
}
}
function previous()
{
  val--;
  for(var i=1;i<=len;i++)
  {   var idNum= "itemOfReview_1"+i;
  if(i<(val-3)|| i>val)
      document.getElementById(idNum).style.display="none";
      else
      document.getElementById(idNum).style.display="block";
}
}
