import React from 'react'
import CarouselContainer from './CarouselContainer'
import CarouselData from './CarouselData.js'
const len=CarouselData.length;
function Review(){
var total=0;
for(var i=0;i<CarouselData.length;i++)
total=total+CarouselData[i].stars;
const avg=parseInt(total/(len+1));


const abc=
<div style={{ paddingTop:"20px",paddingBottom:"40px"}}>
    

<div style={{display:"flex", alignItems:"center"}}>
<button onClick={previous} className="NavButton">{'<'}</button>
<div style={{display: "flex",overflow:"hidden" }}>
 
    <CarouselContainer/>
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
  {   var idNum= "itemOfReviews"+i;
  if(i<(val-4)|| i>val)
      document.getElementById(idNum).style.display="none";
      else
      document.getElementById(idNum).style.display="block";
}
}
function previous()
{
  val--;
  for(var i=1;i<=len;i++)
  {   var idNum= "itemOfReviews"+i;
  if(i<(val-4)|| i>val)
      document.getElementById(idNum).style.display="none";
      else
      document.getElementById(idNum).style.display="block";
}
}
