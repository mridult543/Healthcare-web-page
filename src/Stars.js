import React from 'react'

function Stars(props)
{
    if(props.stars===1)
    return(<span style={{color:"rgba(255, 193, 7, 1)"}}><i class="fa fa-star" ></i></span>)
    else if(props.stars===2)
    return(<span style={{color:"rgba(255, 193, 7, 1)"}}><i class="fa fa-star"></i><i class="fa fa-star"></i></span>)
    else if(props.stars===3)
    return(<span style={{color:"rgba(255, 193, 7, 1)"}}><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span>)
    else if(props.stars===4)
    return(<span style={{color:"rgba(255, 193, 7, 1)"}}><i class="fa fa-star"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></i></span>)
    else if(props.stars===5)
    return(<span style={{color:"rgba(255, 193, 7, 1)"}}><i class="fa fa-star"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></i></span>)
}
export default Stars