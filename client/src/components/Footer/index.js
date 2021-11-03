import React from 'react';
import properties from './footer.module.css'
import "./styles.css"
import logo from "../../images/logo/logo_white.png"


const Footer = (props) => {
    return (
        <footer>
            <div className={properties.wrapper}>
                <div className={properties.foot}>
                    <img alt="NITK racing logo" src={logo}></img>
                </div>
                <div className={properties.foot}>
                <i className={`bi bi-geo-alt-fill ${properties.icon}`}></i>
                    <h3 className={properties.heading}>
                        
                        Address
                        
                    </h3>
                    <p className={properties.body}>
                    NH 66, Srinivasnagar, Surathkal
                    Mangalore Karnataka
                    575025
                    </p>
                </div>
                <div className={properties.foot}>
                <i className={`bi bi-telephone-fill ${properties.icon}`}></i>

                <h3 className={properties.heading}>
                        Contact
                    </h3>
                    <p className={properties.body}>
                    7259159980 
                    <br/>
                    9113514266
                    </p>
                </div>
                <div className={properties.foot}>
                <i className={`bi bi-hand-index-thumb-fill ${properties.icon}`}></i>

                <h3 className={properties.heading}>
                     React out
                    </h3>
                    <p className={properties.body}>
                    captain.nitkracing@gmail.com


                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer