import React from 'react'
import card_1 from './card_1.jpg'
import card_2 from './card_2.png'
import card_3 from './card_3.png'
import card_4 from './card_4.png'
import card_5 from './card_5.png'
import card_6 from './card_6.png'
import card_7 from './card_7.png'
import call from './call.png'

function Service()
    {
      const element=<div>
          <div id="process">
             <div id="v_0">
             <div id="procedure">
                 <div id="v_1">Your peace of mind is </div>
                 <div id="v_2">our number one priority.</div>
                 <div id="v_3">UniversaCare offers a range of services for in-home care.  We are your partners in care, and work with you to come up with a plan of action. </div>
             </div>
              <div id="v_4">
              <img id="card_1" src={card_1} alt="card_1" />   
              <p id="v_4_1">Hourly Home Care</p>
              <p id="v_4_2">4x higher coverage limit than traditional policies for computers and home office equipment.</p>
             </div>
              <div id="v_5">
              <img id="card_1" src={card_2} alt="card_2" />   
              <p id="v_4_1">Personal Care</p>
              <p id="v_4_2">4x higher coverage limit than traditional policies for computers and home office equipment.</p>
              </div>
              <div id="v_6">
              <img id="card_1" src={card_3} alt="card_3" />   
              <p id="v_4_1">Private Nursing</p>
              <p id="v_4_2">4x higher coverage limit than traditional policies for computers and home office equipment.</p>
              </div>
             </div>
              <div id="caution">
              <div id="v_7">
              <img id="card_1" src={card_4} alt="card_4" />   
              <p id="v_4_1">Respite Care</p>
              <p id="v_4_2">4x higher coverage limit than traditional policies for computers and home office equipment.</p>
             </div>
             <div id="v_8">
              <img id="card_1" src={card_5} alt="card_5" />   
              <p id="v_4_1">Life-in Aid</p>
              <p id="v_4_2">4x higher coverage limit than traditional policies for computers and home office equipment.</p>
             </div>
             <div id="v_9">
              <img id="card_1" src={card_6} alt="card_6" />   
              <p id="v_4_1">Memory Care</p>
              <p id="v_4_2">4x higher coverage limit than traditional policies for computers and home office equipment.</p>
             </div>
             <div id="v_10">
              <img id="card_1" src={card_7} alt="card_7" />   
              <p id="v_4_1">Memory Care</p>
              <p id="v_4_2">4x higher coverage limit than traditional policies for computers and home office equipment.</p>
             </div>
             <div id="v_11">
              <img id="call" src={call} alt="call" />   
              <p id="v_4_1">Do you need_support?</p>
              <p id="v_4_2">We glad to help!</p>
              <button id="v_12">Contact us</button>
             </div>
              </div> 
          </div>
      </div>
        
        return( element);
    
}
export default Service