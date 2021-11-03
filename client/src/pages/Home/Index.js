import React, { Fragment, useEffect, useState , useRef, useCallback } from 'react';
import './styles.css'
import properties from "./home.module.css"
import helmetFront from "../../images/hero/helmet_front.png"
import helmetRight from "../../images/hero/helmet_right.png"
import helmetLeft from "../../images/hero/helmet_left.png"
import ThreeD from './sections/ThreeD/index';


import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./anime.css"
import anime from 'animejs';
import Team from './sections/Team/index';
import Sponsors from './sections/Sponsors/Index';


const DUMMY_DATA = [
    {
        id:0,
        primary_subheading:"PERFORMANCE",
        secondary_subheading:'NITKRacing is the Formula Student team of National Institute of Technology Karnataka, Surathkal, India. We are a driven team of students from various branches of engineering, with a passion for racing and race cars.',
        heading:"Maximum Performance",
        image:helmetLeft
    },
    {
        id:1,
        primary_subheading:"PERFORMANCE",
        secondary_subheading:"We participate in FS events all around the world, competing with the absolute best from top colleges and universities to design, build, test, market and race a Formula-style race car. ",
        heading:"Overtaking Competetion",
        image:helmetFront
    },
    {
        id:2,
        primary_subheading:"PERFORMANCE",
        secondary_subheading:"We Live to Race",
        heading:"Reliable & Aerodynamic",
        image:helmetRight
    }
]

const Index = (props) => {

    const animationRef = React.useRef(null);
    const [slide , setSlide] = useState(0)

    React.useEffect(() => {

       const animation = animationRef.current = anime.timeline()
        .add({
          targets: '.letter',
          tra: [-90, 0],
          duration: 2000,
          opacity: [0,1],

          delay: (el, i) => 200 * (i+1)
        });

        return ()=>{
            animation.restart()
        }
      }, [slide]);



    const leftSlideHandler = (event)=>{
        if(slide===0)
         return setSlide(DUMMY_DATA.length - 1)
         
        setSlide(prevSlide=>prevSlide-1) 
    }

    
    const rightSlideHandler = useCallback((event)=>{
        if(slide===DUMMY_DATA.length-1)
         return setSlide(0)
        

       setSlide(prevSlide=>prevSlide+1) 
    } , [slide])

    const containerRef = useRef(null)

    const callbackFunc = useCallback((entries)=>{
        const [entry] = entries
        props.setIsVisible(!entry.isIntersecting)
        
    } , [props])

    useEffect(()=>{
      const slideTimer =  setInterval(()=>{
        rightSlideHandler()
      } , 5000)

       const observedNode = containerRef.current;
        const observer = new IntersectionObserver(callbackFunc , { rootMargin:"-80% 0px 0px 0px"})
        if(containerRef.current) observer.observe(observedNode)

        return ()=>{
            if(observedNode) observer.unobserve(observedNode);
            if(slideTimer) clearInterval(slideTimer)
        }
    } , [containerRef , callbackFunc , rightSlideHandler])

    const wrapSpanAroundLetter = (word)=>{
      const wordWithSpan = word.split('').map((letter, index)=>{
        return (<span key={index} className="letter">
          {letter}
        </span>)
      });

      return wordWithSpan;
    }

    return (

        <Fragment >
        <section id="home">
      
  

          <div className={properties.wrapper}  ref={containerRef}>
     
          <h1  className={`${properties.big_heading} animation`}>
                 {wrapSpanAroundLetter("NKR2K21")}
              </h1>
              <div className={properties.image_container}>
               
     
                  <TransitionGroup className={properties.image_transition}>

                  <CSSTransition
                   key={slide}
                   timeout={600}
                   in={true}
                   appear={true}
                   classNames="anime_image">

                  <img alt="helmet"  
                  className={properties.helmet_image} 
                  width="350px"
                  height="350px"
                  src={DUMMY_DATA[slide].image}>

                  </img>

            

                  </CSSTransition>

              </TransitionGroup>



              </div>
              
              <div className={properties.text_container}>
                <div className={properties.text_wrapper}>

                    
      

                <TransitionGroup 
                className={properties.anime_primary_subheading}>

                <CSSTransition
                key={slide}
                timeout={500}
                in={true}
                appear={true}
                classNames="anime_primary_subheading">
                  <p className={properties.primary_subheading}>
                      {DUMMY_DATA[slide].primary_subheading}
                  </p>

                  </CSSTransition>
                  </TransitionGroup>
                    
                  <TransitionGroup 
                  className={properties.heading_transition}>
                  <CSSTransition
                    key={slide}
                    timeout={600}
                    in={true}
                    appear={true}
                    classNames="anime_heading" >
                  <h1 className={properties.heading}>{DUMMY_DATA[slide].heading}</h1>
                  </CSSTransition>
                  </TransitionGroup>

                  <TransitionGroup 
                  className={properties.anime_secondary_subheading}>
                  <CSSTransition
                    key={slide}
                    timeout={700}
                    in={true}
                    appear={true}
                    classNames="anime_secondary_subheading" >
                  <p className={properties.secondary_subheading}>
                  {DUMMY_DATA[slide].secondary_subheading}
                  </p>

                  </CSSTransition>
                  </TransitionGroup >

                  <div className={properties.button_group}>

                  <div className={"button"}>
                      <a href="#threeD">
                      Start Here
                      <i className="bi bi-arrow-right"></i>
                      </a>
                  </div>
                  <div className="button secondary">
                    <a href="#sponsors">
                      Contact us
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                  </div>

                </div>
              </div>

          </div>

          {/* <div className={properties.slide_changer}>
               
              <div className={properties.slide__left} onClick={leftSlideHandler}>
              <i className="bi bi-arrow-left"></i>
              Left
              </div>

              <div className={properties.slide__right} onClick={rightSlideHandler}>
                  Right <i className="bi bi-arrow-right"></i>
              </div>

          </div> */}

        </section>

        <ThreeD/>

     


        <Team/>

        <Sponsors/>

        </Fragment>

        
    );
};

export default Index;