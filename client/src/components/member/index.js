import './styles.css'
import properties from "./member.module.css"
import {SplideSlide } from '@splidejs/react-splide';


import React from 'react';

const Member = (props) => {
    return (
        <SplideSlide>
             <div className={properties.wrapper}>
                 <div className={properties.member}>
                     <img alt="member" 
                     width="350px"
                     src={props.data.picture}></img>
                 </div>

                 <div className={properties.info}>
                     <div className={properties.info_wrapper}>
                         <p className={properties.sec_subheading}>{props.data.subsystem}</p>
                         <h2 className={properties.heading}>{props.data.name}</h2>
                         <p className={properties.body}>
                         {props.data.bio}                         
                         </p>
                         <div className={properties.social_icon}>
                         <a href={props.data.linkedin} target="_blank">
                            <i className="bi bi-linkedin"></i>
                         </a>
                         <a href={props.data.instagram} target="_blank">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href={"mailto:" + props.data.email} target="_blank">
                         <i className="bi bi-envelope-fill"></i>
                        </a>
                         </div>
                     </div>
                 </div>
             </div>       
        </SplideSlide>
    );
};

export default Member;