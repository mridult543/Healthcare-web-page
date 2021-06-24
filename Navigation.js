import React from 'react'

function Navigation()
{ const items=
<div id="navid">
    
<div style={{display:"flex",justifyContent:"space-around"}}>
    
<img style={{padding:"15px",width: "200px",height: "38.44px"}}src="https://s3-alpha-sig.figma.com/img/f930/3702/7e3a8c9446d5cc557cc0ec5a247b02e5?Expires=1624233600&Signature=EqvBpF9IMh0mgncCHBK-pj6A07n6wTlbXjvfPSMBz-u25UD6zmCJKr0MRRPV5Jb1jA80pviifWG0S6St2VLbCZ0wrY86kD29VOmrEwCBrQ8P7H9OPzsbCPZS38Q3ym8HXIT0Hh2Qy4gUrC5qwKOsJUY13-VVsC0xULmLNYPW8ih600s0NApk4syMgYSH6wm3q9By61hm5JRP8XzdZbVI9I~yXPYNzeShx0ovr1SywjqQqHG79HYUI3yfQ0Fv~5MhqxR~mvnaRE-GSF6RX~QyOw1ygwyHoAXu307oABdEPqYpKEkuhmLOoCWhTQxkYApwi7SUs5FyZaegb9y2lbl3FA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="oldpeople"></img>
<ul style={{padding:"10px"}}>

<li><a href="#about">About</a></li>
<li><a href="#services">Services</a></li>
<li><a href="#Resources">Resources</a></li>
<li><a href="#careers" style={{color:"rgba(0, 71, 171, 1)"}}>Careers</a></li>
<li><a href="#homeCareHeroes">Home Care Heroes</a></li>
<li><a href="#contact">Contact</a></li>
</ul>

<a href="tel:8669863356" style={{textDecoration:"none",padding:"24px",fontSize:"16px"}} ><i class="fa fa-phone" style={{width:"26px",height:"26px"}}></i> 866-986-3356</a>

</div>



</div>
return(items);
}
export default Navigation
