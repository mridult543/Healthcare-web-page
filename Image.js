import React from 'react'

import './Image.css';
import hand from './hand.png'

function Image(){
    const element=
    <div id="part_1"  >
      <div id="screen" >
        <div id="screenshot" >
         <img id="people" alt="screenshot" src="https://s3-alpha-sig.figma.com/img/ad1f/4d94/0bb1f6cc10be2e61fcbd2ab5f5c835eb?Expires=1627257600&Signature=H2hqozMCE82F4J3WqLIc7K9ZDLn5vH0eCVkiADAuxBFWYBcENQdYYqvou3RL55kKeusLG7Wwjc34swTktfHhzexBRwqU8dPJSBfegjtEvSdWeyGVXdgps8sENqwJswA-bqgd8evyc-QYqYbGaSRtrKa0oGN58~bW~ziynBtrxCgBMCuDtncC8IEZPu3Rdi3klxEcCdlcdZqMn4Eluij4QGYpzLY7PpfNL-53s-KsN-vckj8AEVPyp7POWcedM18Gn2MynP4NRREjfRqSDaJX0Lja8r2QDA27Z-MlinkzvN1LSlmd-i2Z8PIFgNWM8R0fBujHYrCQQHgUr9Z1WCBfTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
        </div>
      </div>
      <div id="part_2"  >
        <div id="text" >
           <h1 id="para" >WE DO WHATEVER IT MAKES TO BRING YOU PEACE OF MIND</h1>
           <button id="button" >Request An Appointment</button>
        </div>
        <div id="image" >
          <img src={hand} alt=""></img>
        </div>
      </div>
</div>
return(element)

}




export default Image