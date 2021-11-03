import React from 'react';
import properties from './threed.module.css';
import './styles.css';
import Model from '../../../../components/model/index';

const ThreeD = (props) => {
    return (
        <section id="threeD">
            <div className={properties.main_section}>
                <h1 className={properties.heading}>
                  NKR<span className={properties.heading_span}>2K21</span>
                </h1>
                <div className={properties.col_one}>

                </div>
                <div className={properties.col_two}>

                </div>
            </div>
            <div>
            <div className={properties.advanced_section}>
                <Model></Model>
                <Model></Model>
                <Model></Model>

            </div>
            </div> 
        </section>
    );
};

export default ThreeD;
