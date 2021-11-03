import React, { Fragment, useEffect, useState , useRef } from 'react';
import './styles.css'
import properties from "./Intro.module.css"
import ReactPlayer from 'react-player'


const About = (props) => {



    const [offsetY , setOffsetY] = useState(0)
    const handleScroll = ()=>{
        setOffsetY(window.pageYOffset)
    }

    useEffect(()=>{
        window.addEventListener('scroll' , handleScroll)
        return ()=>{
            window.removeEventListener('scroll'  , handleScroll)
        }

    } , [])


    return (
        <section className={properties.root} id="intro">

       
            <img alt="About"
            style={{transform:`translateY(${offsetY*0.5}px  )`}}
            className={properties.bg} 
            src="https://wallpaperaccess.com/full/2240751.jpg"/>
            
   

            <div className={properties.wrapper}>
            <div className={properties.heading}>
            <h1 style={{fontSize:"36px", marginBottom:"16px"}}>
            We are   <span style={{textDecoration:"underline", color:"red"}}>Racers.</span>
            </h1>
            <div>
              <a href="/#">
             <span style={{fontSize:"32px", cursor:'pointer'}} class="material-icons">link</span>
             </a>
            </div>
            
            </div>  
            
            <p style={{fontSize:"14px",lineHeight:"28px" , fontWeight:300}}>
            NITK Racing is a dynamic team formed in 2006, composed of talented students across the campus here at NITK - one of the eminent institutes in our country, with a passion for race cars and a common goal to emerge as the best racing team. Our team designs and develops race cars which can be rolled out on the racetrack , as we hand pick the best students and provide them the exposure to the world that revolves around the racetrack right from the beginning. It took us 3500 man-hours to build our last race car. The significant work done by the team includes, making the design lighter and stronger, ready for the speedway. The team works under the expert guidance of our mentors including our faculty members and the Centre for System Design (CSD-NITK).
            <br/>
            
            Our various achievements include participation and qualification in different technical rounds and events as a part of various major racing events/tournaments held in different parts of our country.  
            </p>
            </div>
           
        </section>
    );
};

export default About;