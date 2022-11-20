import React, { useState } from 'react';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Interview from './Interview';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import ResumeHeader from './ResumeHeader';

const MyResume = () => {

 const experienceYears =  new Date().getFullYear() - 2019;

 const resumes  = [ {
    name: 'Education',
    component: Education
 },
{
    name: 'Professional Skills',
    component: Skills
}, 
{
    name: 'Experience',
    component: Experience
},
{
    name: 'Interview',
    component: Interview
}];

const [activeSlide, setActiveSlide] = React.useState(resumes[0].component);

const handleClick = (index) => {
    const newSlide = resumes[index].component;
    setActiveSlide(newSlide);
   
}

  return (
    <section className='myresume flex-column'> 
        <div >
            {resumes.map((resume, index)=>{
            return <span onClick={()=>{handleClick(index)}}>{resume.name}</span>
        })}
        </div>
        <div>{activeSlide}</div>
    </section>
  )
}

export default MyResume