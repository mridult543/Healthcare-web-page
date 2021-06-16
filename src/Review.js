import React from 'react'
import ReviewContainer from './ReviewContainer'
import ReviewData from './ReviewData.js'
import Stars from './Stars.js'
const len=ReviewData.length;
function Review(){
var total=0;
for(var i=0;i<ReviewData.length;i++)
total=total+ReviewData[i].stars;
const avg=parseInt(total/(len+1));


const abc=
<div style={{backgroundColor: "rgba(255, 241, 225, 1)", paddingTop:"80px",paddingBottom:"80px"}}>
    

<div style={{display:"flex", alignItems:"center"}}>
<button onClick={previous} className="NavButtons">{'<'}</button>
<div style={{display: "flex",overflow:"hidden" }}>
   
    
    <div className="itemOfReview" style={{width:"300px",height:"210px",backgroundColor:"rgba(255, 241, 225, 1)"}}>
        <h1>{avg}</h1>
        <Stars stars={avg}/>
        <h4>{len} verified customers reviewed by google</h4>
        
    </div>
    <ReviewContainer/>
    
    
        
</div>
<button onClick={next} className="NavButtons">{'>'}</button>
</div>


<a href="AllReviews" style={{fontSize:"26px"}}>See all reviews<i class="fa fa-long-arrow-right"></i></a>
    
</div>
return(abc)
}
export default Review
var val=4;


function next()
{
  val++;
  for(var i=1;i<=len;i++)
  {   var idNum= "itemOfReview"+i;
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
  {   var idNum= "itemOfReview"+i;
  if(i<(val-3)|| i>val)
      document.getElementById(idNum).style.display="none";
      else
      document.getElementById(idNum).style.display="block";
}
}