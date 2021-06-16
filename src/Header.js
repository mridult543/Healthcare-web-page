import React from 'react'

import Navigation from './Navigation.js'
import Appointment from './Appointment.js'
function Header()
    {
      const element=<div>
        <div id="precaution"> <i class="fa fa-info-circle" ></i>Read about our covid-19 precautions</div>
        
        <hr></hr>
        <div id="N1">

        <Navigation />    
       <Appointment />
        </div>
        
        <div id="markerCoverage"><i class="fa fa-map-marker"></i>UNIVERSECARE AREA OF COVERAGE</div>
    </div>
        return( element);
    
}
export default Header