import React, {useEffect, useState} from 'react';
import './styles.css';
import properties from './Achivements.module.css';
import Achievement from '../../../../components/Achievement/Index';
import AchievementAPI from '../../../../services/AchievementApi';


const Achivements = (props) => {

  const [achievements, setAchievements] = useState([])

  useEffect(()=>{
    AchievementAPI.getAchievements()
    .then((res)=>setAchievements(res.data))
    .catch(res=>console.error(res))
  },[])


    return (
        <section className={properties.root} id="achievement">

             <h1 className={properties.heading}>
                
                 Achievements
              </h1>
            <div className={properties.wrapper}>
              {achievements.map((item, index)=>{
               return <Achievement data={item} key={Math.random()} index={index}/>;
              })}
            </div>
        </section>
    );
};

export default Achivements;
