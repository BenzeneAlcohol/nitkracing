import React from 'react';
import './styles.css'
import properties from "./Newsletter.module.css"
import magzine from "../../../../images/magazine.png"
import Splide from '@splidejs/react-splide/dist/js/components/Splide';
import SplideSlide from '@splidejs/react-splide/dist/js/components/SplideSlide';

const Newsletter = (props) => {




    return (
        <section id="newsletter">
                <div className={properties.wrapper}>
                    {/* <img className={properties.magzine} src={magzine}/> */}
                    <div className={properties.slider}>
                    <Splide 
         options={ {
             type:'fade',
             arrows:false,
             height:"60vh"
   

          } }
            className={properties.slider}>
            
        
               <SplideSlide>
                   <div className={properties.magzine}>
                       <img alt="magzine" src={magzine}></img>
                   </div>
               </SplideSlide>
               <SplideSlide>
               <div className={properties.magzine}>
                   
                       <img alt="magzine" src={magzine}></img>
                      
                   </div>
               </SplideSlide>
            
            </Splide>
                    </div>

                    <div className={properties.mail}>
                  
                    <h1 className={properties.heading}>
                       <span>
                       News Letter

                           </span>
                   </h1>

                   <div className={properties.info}>
                   <p>
                   It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                   </p>

                   <p >
                   <i className="bi bi-download"></i>
                       Download</p>
                   
                 
                   </div>

                   <div className={properties.metadata}>
                   <p>
                   <i className="bi bi-calendar-date"></i>
                       12 January 2021
                   </p>
                   <p>
                   <i className="bi bi-clock-history"></i>
                       5 mins read
                   </p>
                   </div>
                </div>

                </div>
        </section>
    );
};

export default Newsletter;