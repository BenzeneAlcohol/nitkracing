import React, { Fragment, useEffect, useState , useRef } from 'react';
import './styles.css'
import properties from "./about.module.css"
import Intro from "./sections/Intro/Index"
import Achivements from './sections/Achivements/Index'
import Newsletter from './sections/Newsletter/Index';


const About = (props) => {
    const [offsetY , setOffsetY] = useState(0)
    const handleScroll = ()=>{

    }

    useEffect(()=>{
        props.setIsVisible(true)
        window.addEventListener('scroll' , handleScroll)
        return ()=>{
            window.removeEventListener('scroll'  , handleScroll)
        }

    } , [])
    return (
        <Fragment>
       
            <Intro/>
            <Achivements/>
            {/* <Newsletter/> */}
        </Fragment>
    );
};

export default About;