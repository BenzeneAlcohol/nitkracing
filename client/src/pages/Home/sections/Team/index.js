import React, { useEffect, useState } from 'react';
import properties from './team.module.css'
import "./styles.css"
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Splide } from '@splidejs/react-splide';
import Member from '../../../../components/member/index';
import Members from "../../../../services/Members"

const DUMMY_DATA = [{
    id:0,
    memberName:"Anas Aijaz",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur ornare tincidunt. Vivamus vel facilisis mauris. Fusce id porta lectus, at efficitur est. Vivamus eget arcu a nulla volutpat auctor sed non arcu. Etiam at mattis mauris. Mauris quis tellus in elit rhoncus pretium.",
    heading:"Frontend Developer",
    url:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"

},
{
    id:1,
    memberName:"Muthukumar",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur ornare tincidunt. Vivamus vel facilisis mauris. Fusce id porta lectus, at efficitur est. Vivamus eget arcu a nulla volutpat auctor sed non arcu. Etiam at mattis mauris. Mauris quis tellus in elit rhoncus pretium.",
    heading:"Backend Developer",
    url:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"

},
{
    id:2,
    memberName:"Danish Juneja",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur ornare tincidunt. Vivamus vel facilisis mauris. Fusce id porta lectus, at efficitur est. Vivamus eget arcu a nulla volutpat auctor sed non arcu. Etiam at mattis mauris. Mauris quis tellus in elit rhoncus pretium.",
    heading:"Lead Strategist",
    url:"https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"

},
{
    id:3,
    memberName:"Anuran Saikia",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur ornare tincidunt. Vivamus vel facilisis mauris. Fusce id porta lectus, at efficitur est. Vivamus eget arcu a nulla volutpat auctor sed non arcu. Etiam at mattis mauris. Mauris quis tellus in elit rhoncus pretium.",
    heading:"App developer",
    url:"https://image.cnbcfm.com/api/v1/image/106689818-1599150563582-musk.jpg?v=1620227840"

},

{
    id:4,
    memberName:"Utkarsh Mahajan",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur ornare tincidunt. Vivamus vel facilisis mauris. Fusce id porta lectus, at efficitur est. Vivamus eget arcu a nulla volutpat auctor sed non arcu. Etiam at mattis mauris. Mauris quis tellus in elit rhoncus pretium.",
    heading:"Server Manager",
    url:"https://st3.depositphotos.com/9881890/16378/i/600/depositphotos_163785870-stock-photo-blonde-smiling-businesswoman.jpg"

},
{
    id:5,
    memberName:"Kunal Singh",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur ornare tincidunt. Vivamus vel facilisis mauris. Fusce id porta lectus, at efficitur est. Vivamus eget arcu a nulla volutpat auctor sed non arcu. Etiam at mattis mauris. Mauris quis tellus in elit rhoncus pretium.",
    heading:"Head of Marketing",
    url:"https://www.guinnessworldrecords.com/Images/Oldest-person-kane-tanaka-certificate_tcm25-563941.jpg"

}

]

const Team = (props) => {
  const [members,setMembers] = useState([])

  useEffect(()=>{
    Members.getMembers()
    .then((res)=>setMembers(res.data.members))
    .catch(res=>console.error(res))
  },[])

  if(members.length === 0)
    return <p>Loading</p>

    return (
        <section id="team">
           

            <h1 className={properties.heading}>
                The <span>Team</span>
            </h1>

            <div className={properties.container}>
            <Splide 
         options={ {
             height:"60vh",
             autoplay:true,
             interval:2000,
             arrows:false,
             type:"fade"
          } }
            className={properties.slider}>
        
               
               {members.map((data , index)=>{
                return <Member data={data} key={index} info={data}/>
               })}
            
            </Splide>
            </div>
        </section>
    );
};

export default Team;