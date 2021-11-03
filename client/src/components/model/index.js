import './styles.css'
import properties from "./model.module.css"



import React from 'react';

import astro from "../../images/threeD/Astronaut.glb"

const Model = (props) => {
    return (
        <div className={properties.model}>
            <div className={properties.wrapper}>
                <p className={properties.subheading}>PERFORMANCE</p>
                <h3 className={properties.heading}>X-FOURENTIER DOOR</h3>
                <div className={properties.model_image}>
                   <h1 className={properties.bigheading}>R1</h1>
                  


                                  
                <model-viewer src={astro} camera-controls shadow-intensity="1">

<div className="progress-bar hide" slot="progress-bar">
    <div className="update-bar"></div>
</div>
<button slot="ar-button" id="ar-button">
    View in your space
</button>

</model-viewer>


                </div>
                
  
                
                
                 </div>
        </div>
    );
};

export default Model;